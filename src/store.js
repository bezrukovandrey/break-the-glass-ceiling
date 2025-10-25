import { writable } from 'svelte/store';

const getInitialLanguage = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return 'en';
};

export const mobileMenuVisible = writable(false);
export const language = writable(getInitialLanguage());

language.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('language', value);
  }
});