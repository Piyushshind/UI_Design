import { useStoreCoordinates } from "../hooks/useStoreCoordinates";

async function checkAndStoreGpsAvailability(storeCoordinates) {
    try {
        if (!("geolocation" in navigator)) {
            alert("GPS is not available on this device.");
            return false;
        }

        const permission = await navigator.permissions.query({ name: "geolocation" });

        if (permission.state === "granted") {
            return getLocationAndStore(storeCoordinates);
        }

        if (permission.state === "denied") {
            alert("⚠️ GPS access denied. Please enable location permissions in your settings.");
            return false;
        }

        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    await storeCoordinates(position.coords);
                    resolve(true);
                },
                (error) => {
                    alert("GPS permission denied.");
                    console.error("GPS permission denied. ", error);
                    resolve(false);
                }
            );
        });
    } catch (error) {
        console.error("Error during GPS availability check:", error);
        alert("An error occurred while checking GPS availability.");
        return false;
    }
}

async function getLocationAndStore(storeCoordinates) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                await storeCoordinates(position.coords);
                resolve(true);
            },
            (error) => {
                alert("Error getting the location.", error);
                reject(false);
            }
        );
    });
}

export { checkAndStoreGpsAvailability };