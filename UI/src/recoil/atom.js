import { atom } from 'recoil';

export const windowWidthState = atom({
  key: 'windowWidthState',
  default: window.innerWidth,
});

export const languageState = atom({
  key: 'languageState',
  default: 'english',
});

export const errorMessageState = atom({
  key: 'errorMessageState',
  default: '',
});

export const recordingButtonEnableState = atom({
  key: 'recordingButtonEnableState',
  default: false,
});

export const activateWebCamState = atom({
  key: 'activateWebCamState',
  default: false,
});

export const permissionsState = atom({
  key: "permissionsState",
  default: false,
});