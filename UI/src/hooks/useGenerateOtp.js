// import { useSetRecoilState } from "recoil";
// import { generatedOtpState } from "../recoil/atom";


// export const useGenerateOtp = () => {
//     const setGeneratedOtp = useSetRecoilState(generatedOtpState);

export const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // setGeneratedOtp(otp); 
    return otp;
};

//     return generateOtp;
// };
