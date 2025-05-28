
import type { Config } from "tailwindcss";

export default {
	darkMode: 'class',
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Custom modern color scheme
				primary: {
					DEFAULT: '#6366F1', // Indigo 500
					50: '#EEF2FF',
					100: '#E0E7FF',
					200: '#C7D2FE',
					300: '#A5B4FC',
					400: '#818CF8',
					500: '#6366F1',
					600: '#4F46E5',
					700: '#4338CA',
					800: '#3730A3',
					900: '#312E81',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#8B5CF6', // Violet 500
					50: '#F5F3FF',
					100: '#EDE9FE',
					200: '#DDD6FE',
					300: '#C4B5FD',
					400: '#A78BFA',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
					800: '#5B21B6',
					900: '#4C1D95',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#06B6D4', // Cyan 500
					50: '#ECFEFF',
					100: '#CFFAFE',
					200: '#A5F3FC',
					300: '#67E8F9',
					400: '#22D3EE',
					500: '#06B6D4',
					600: '#0891B2',
					700: '#0E7490',
					800: '#155E75',
					900: '#164E63',
					foreground: '#FFFFFF'
				},
				background: '#F9FAFB', // Gray 50
				foreground: '#111827', // Gray 900
				muted: {
					DEFAULT: '#F3F4F6',
					foreground: '#9CA3AF'
				},
				border: '#E5E7EB',
				input: '#E5E7EB',
				ring: '#6366F1',
				// ShadCN variables mapped to our colors
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#111827'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#111827'
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF'
				},
				sidebar: {
					DEFAULT: '#F9FAFB',
					foreground: '#111827',
					primary: '#6366F1',
					'primary-foreground': '#FFFFFF',
					accent: '#F3F4F6',
					'accent-foreground': '#111827',
					border: '#E5E7EB',
					ring: '#6366F1'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
