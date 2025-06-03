
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import keycloak from './keycloak';

export interface User {
  id: string;
  email: string;
  name: string;
  username?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  login: () => Promise<void>;
  register: (name: string, email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  initializeAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isInitialized: false,
      
      initializeAuth: async () => {
        try {
          const authenticated = await keycloak.init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            checkLoginIframe: false,
          });

          if (authenticated && keycloak.token) {
            const userProfile = await keycloak.loadUserProfile();
            const user: User = {
              id: keycloak.subject || '',
              email: userProfile.email || '',
              name: `${userProfile.firstName || ''} ${userProfile.lastName || ''}`.trim(),
              username: userProfile.username,
            };

            set({
              user,
              token: keycloak.token,
              isAuthenticated: true,
              isInitialized: true,
            });
          } else {
            set({
              user: null,
              token: null,
              isAuthenticated: false,
              isInitialized: true,
            });
          }
        } catch (error) {
          console.error('Failed to initialize Keycloak:', error);
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isInitialized: true,
          });
        }
      },
      
      login: async () => {
        try {
          await keycloak.login({
            redirectUri: window.location.origin + '/dashboard',
          });
        } catch (error) {
          console.error('Login failed:', error);
          throw new Error('Login failed');
        }
      },
      
      register: async (name: string, email: string, password: string, username: string) => {
        try {
          // For registration, we'll use Keycloak Admin API
          // Note: This requires admin credentials and should ideally be done through a backend service
          const keycloakAdminUrl = `${keycloak.authServerUrl}/admin/realms/${keycloak.realm}/users`;
          
          const [firstName, ...lastNameParts] = name.split(' ');
          const lastName = lastNameParts.join(' ');
          
          const userData = {
            username,
            email,
            firstName,
            lastName,
            enabled: true,
            emailVerified: false,
            credentials: [{
              type: 'password',
              value: password,
              temporary: false,
            }],
          };

          // This is a simplified example - in production, you should handle this through your backend
          const response = await fetch(keycloakAdminUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${await getAdminToken()}`, // You need to implement this
            },
            body: JSON.stringify(userData),
          });

          if (!response.ok) {
            throw new Error('Registration failed');
          }

          // After successful registration, log the user in
          await get().login();
        } catch (error) {
          console.error('Registration failed:', error);
          throw new Error('Registration failed');
        }
      },
      
      logout: () => {
        keycloak.logout({
          redirectUri: window.location.origin,
        });
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        // Only persist basic user info, not tokens (they expire)
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Helper function to get admin token (implement based on your setup)
async function getAdminToken(): Promise<string> {
  // This should be implemented to get an admin token
  // Usually done through a backend service for security
  throw new Error('Admin token retrieval not implemented');
}

// Protected Route HOC
export function withAuth<P extends Record<string, any>>(Component: React.ComponentType<P>) {
  const WrappedComponent = (props: P) => {
    const { isAuthenticated, isInitialized } = useAuth();
    
    if (!isInitialized) {
      return <div>Loading...</div>;
    }
    
    if (!isAuthenticated) {
      window.location.href = '/login';
      return null;
    }
    
    return <Component {...props} />;
  };
  
  return WrappedComponent;
}
