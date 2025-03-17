import { useSetRecoilState } from 'recoil';
import { gpsCoordinatesState } from '../recoil/atom';

export const useStoreCoordinates = () => {
    const setCoordinates = useSetRecoilState(gpsCoordinatesState);

    const storeCoordinates = (coords) => {
        const latitude = coords.latitude || 0;
        const longitude = coords.longitude || 0;
        setCoordinates({ latitude: latitude, longitude: longitude });
        // alert(`Coordinates stored: Latitude ${coords.latitude}, Longitude ${coords.longitude}`);
    };

    return storeCoordinates;
};
