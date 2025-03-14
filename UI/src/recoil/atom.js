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

export const isValidHumanFaceDetectedState = atom({
  key: "isValidHumanFaceDetectedState",
  default: false,
});

export const setFaceDetectionWarnningsMassageState = atom({
  key: "setFaceDetectionWarnningsMassageState",
  default: false,
});

export const gpsCoordinatesState = atom({
  key: "gpsCoordinatesState",
  default: { latitude: null, longitude: null },
});

export const generatedOtpState = atom({
  key: 'generatedOtpState',
  default: null,
});

export const authState = atom({
  key: 'authState',
  default: {
    isAuthenticated: false,
    jwtToken: null,
    customerId: null,
    token: null
  },
});