
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      getStarted: 'Get Started',
      
      // Common
      welcomeBack: 'Welcome back',
      backToHome: '← Back to home',
      
      // Hero Section
      heroTitle: 'Build Amazing Web Applications',
      heroSubtitle: 'Create modern, responsive applications with the latest technologies and best practices.',
      heroCtaPrimary: 'Get Started',
      heroCtaSecondary: 'Watch Demo',
      
      // CTA Section
      ctaTitle: 'Ready to Get Started?',
      ctaDescription: 'Join thousands of developers building amazing applications.',
      ctaButton: 'Start Building Today',
      
      // Dashboard
      dashboard: 'Dashboard',
      overview: 'Overview',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Logout',
      welcomeDashboard: 'Welcome back',
      dashboardSubtitle: "Here's what's happening with your account today.",
      
      // Footer
      navigation: 'Navigation',
      account: 'Account',
      allRightsReserved: 'All rights reserved',
      
      // Language
      language: 'Language',
      english: 'English',
      bangla: 'বাংলা',
    }
  },
  bn: {
    translation: {
      // Navigation
      home: 'হোম',
      about: 'সম্পর্কে',
      contact: 'যোগাযোগ',
      login: 'লগইন',
      register: 'রেজিস্টার',
      getStarted: 'শুরু করুন',
      
      // Common
      welcomeBack: 'আবার স্বাগতম',
      backToHome: '← হোমে ফিরে যান',
      
      // Hero Section
      heroTitle: 'অসাধারণ ওয়েব অ্যাপ্লিকেশন তৈরি করুন',
      heroSubtitle: 'সর্বশেষ প্রযুক্তি এবং সর্বোত্তম অনুশীলনের সাথে আধুনিক, প্রতিক্রিয়াশীল অ্যাপ্লিকেশন তৈরি করুন।',
      heroCtaPrimary: 'শুরু করুন',
      heroCtaSecondary: 'ডেমো দেখুন',
      
      // CTA Section
      ctaTitle: 'শুরু করার জন্য প্রস্তুত?',
      ctaDescription: 'হাজার হাজার ডেভেলপারদের সাথে যোগ দিন যারা অসাধারণ অ্যাপ্লিকেশন তৈরি করছেন।',
      ctaButton: 'আজই তৈরি করা শুরু করুন',
      
      // Dashboard
      dashboard: 'ড্যাশবোর্ড',
      overview: 'সংক্ষিপ্ত বিবরণ',
      profile: 'প্রোফাইল',
      settings: 'সেটিংস',
      logout: 'লগআউট',
      welcomeDashboard: 'আবার স্বাগতম',
      dashboardSubtitle: 'আজ আপনার অ্যাকাউন্টে কী ঘটছে তা এখানে।',
      
      // Footer
      navigation: 'নেভিগেশন',
      account: 'অ্যাকাউন্ট',
      allRightsReserved: 'সমস্ত অধিকার সংরক্ষিত',
      
      // Language
      language: 'ভাষা',
      english: 'English',
      bangla: 'বাংলা',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
