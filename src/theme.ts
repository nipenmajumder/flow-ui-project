
// Semantic color tokens for design consistency
export const theme = {
  colors: {
    primary: 'hsl(var(--color-primary))',
    secondary: 'hsl(var(--color-secondary))',
    accent: 'hsl(var(--color-accent))',
    background: 'hsl(var(--color-bg))',
    surface: 'hsl(var(--color-surface))',
    text: 'hsl(var(--color-text))',
    textMuted: 'hsl(var(--color-text-muted))',
    border: 'hsl(var(--color-border))',
  },
  // Tailwind class mappings for semantic usage
  classes: {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
    surface: 'bg-surface text-foreground',
    muted: 'bg-muted text-muted-foreground',
    border: 'border-border',
    input: 'border-input bg-background',
    ring: 'ring-ring',
  }
} as const;

// Utility function to get theme-aware classes
export const getThemeClasses = (variant: keyof typeof theme.classes) => {
  return theme.classes[variant];
};

// Color palette for reference
export const colorPalette = {
  indigo: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1', // Primary
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },
  violet: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6', // Secondary
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },
  cyan: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4', // Accent
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',
  },
  gray: {
    50: '#F9FAFB', // Background
    100: '#F3F4F6',
    200: '#E5E7EB', // Border
    300: '#D1D5DB',
    400: '#9CA3AF', // Muted text
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827', // Foreground
  },
} as const;
