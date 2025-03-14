import { useSetRecoilState } from 'recoil';
import { gpsCoordinatesState } from '../recoil/atom';

export const useStoreCoordinates = () => {
    const setCoordinates = useSetRecoilState(gpsCoordinatesState);

    const storeCoordinates = (coords) => {
        setCoordinates({ latitude: coords.latitude, longitude: coords.longitude });
        // alert(`Coordinates stored: Latitude ${coords.latitude}, Longitude ${coords.longitude}`);
    };

    return storeCoordinates;
};
