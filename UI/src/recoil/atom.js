import { atom } from 'recoil';

export const windowWidthState = atom({
    key: 'windowWidthState', 
    default: window.innerWidth, 
  });