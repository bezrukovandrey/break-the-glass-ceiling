import { writable } from 'svelte/store';

const getInitialLanguage = () => {
    return 'en'; // Fallback to 'en' if localStorage is unavailable
  };
  
  export const mobileMenuVisible = writable(false);
  export const language = writable(getInitialLanguage());
  
  language.subscribe((value) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', value);
    }
  });