import { getLocations } from "@/server/menu";

let cachedLocations = null;

export async  function fechLocations() {
    if(!cachedLocations) {
        cachedLocations = await getLocations();
    }
    return cachedLocations;
}

export async function getLocationsTransform() {
    const locations = await fechLocations();
    console.log("locations:::", locations);
    return locations.map((location) => ({
        value: location.location,
        label: location.location,
    }));
}