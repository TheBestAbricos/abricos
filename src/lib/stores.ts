import { writable } from 'svelte/store';

export const openedPanel = writable('initial');

export const notificationStatus = writable(false);

export const logoChoiceMode = writable(false); // not to store

export const logoSrc = writable('images/profile-images/user-default-logo.png');

export const isFiltered = writable(false);
