import { atom } from 'recoil';

export const windowWidthState = atom({
    key: 'windowWidthState', 
    default: window.innerWidth, 
  });

  export const languageState = atom({
    key: 'languageState', 
    default: 'english',  
  });