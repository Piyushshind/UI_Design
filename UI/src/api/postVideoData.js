import axios from "axios";

const API_URL = "https://192.168.43.208/api/v2/patrons/"; // 192.168.43.208  // localhost:8080

export const postVideoData = async (videoBlob, gpsCoordinates, authStateObj, generatedOtp) => {
    // console.log('api heats...... ');
    const { customerId, token, jwtToken } = authStateObj;
    const formData = new FormData();
    formData.append("file", videoBlob);
    formData.append("longitude", gpsCoordinates.longitude);
    formData.append("latitude", gpsCoordinates.latitude);
    formData.append("actualOTP", generatedOtp);
    formData.append("token", token);
    const dynamicUrl = `${API_URL}${customerId}/verifyVideo`;

    try {
        // console.log("gpsCoordinates :- ", gpsCoordinates, "videoBlob :- ", videoBlob, "generatedOtp ", generatedOtp);

        const response = await axios.post(dynamicUrl, formData, { headers: { "Authorization": jwtToken }, withCredentials: true, });
        return response.data;
    } catch (error) {
        throw new Error("API Request failed: " + error.message);
    }
};
