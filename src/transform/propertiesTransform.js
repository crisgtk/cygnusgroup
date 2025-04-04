import { getProperties, getPropertyDescriptions, getPropertyForCities, getPropertyForSlice } from "@/server/properties";

let cachedProperties = null;
let cachedPropertyDescriptions = null;
let cachedPropertySlide = null;
let cachedPropertyForCites= null;

async function fetchProperties(id) {
  if (!cachedProperties) {
    cachedProperties = await getProperties(id);
  }
  return cachedProperties;
}

async function fetchPropertiesSlice() {
  if (!cachedProperties) {
    cachedPropertySlide = await getPropertyForSlice();
  }
  return cachedPropertySlide;
}

async function fetchPropertiesForCities() {
  if (!cachedPropertyForCites) {
    cachedPropertyForCites = await getPropertyForCities();
  }
  return cachedPropertyForCites;
}

async function fetchPropertyDescriptions() {
  if (!cachedPropertyDescriptions) {
    cachedPropertyDescriptions = await getPropertyDescriptions();
  }
  return cachedPropertyDescriptions;
}

export async function getSliderItemsTransform() {
  const properties = await fetchPropertiesSlice();
  return properties.map((property) => ({
    id: property.Id,
    image: property.Image,
    price: property.price,
    title: property.Title,
    description: property.Description,
  }));
}

export async function getLocationTransform() {
  const propertiesDescriptions = await fetchPropertyDescriptions();
  return propertiesDescriptions.map((property) => ({
    value: property.propertyId.toString(),
    label: property.Description,
  }));
}

export async function getListings(id) {
  const listings = await fetchProperties(id);
  return listings.map((property) => ({
    id: property.Id,
    image: property.Image,
    title: property.Title,
    city: property.City,
    location: property.location,
    address: property.address,
    bed: property.Bed || "0",
    bath: property.Bath || "0",
    sqft: property.sqft,
    price: property.price,
    forRent: property.ForRent,
    tags: property.tags ? property.tags.split(', ') : [],
    propertyType: property.PropertyType,
    yearBuilding: property.YearBuilding,
    featured: property.Featured,
    lat: property.Latitude,
    long: property.Longitude,
    features: property.features ? property.features.split(', ') : [],
    propertyName: property.propertyName,
    Garaje: property.Garaje,
    parrafo1: property.parrafo1,
    parrafo2: property.parrafo2,
    youtubeLink: property.youtubeLink,
    executiveId: property.ExecutiveId,
    executiveName: property.ExecutiveName,
    executivePhone: property.ExecutivePhone,
    executiveEmail: property.ExecutiveEmail,
    executiveCategory: property.ExecutiveCategory,
    executiveImage: property.ExecutiveImage,
    createDate: property.CreateDate,
    Deleted: property.Deleted,
    status: property.Status, 
  }));
}

export async function getCities() {
  const listings = await fetchPropertiesForCities();
  return listings.map((property) => ({
    //id: property.Id,
    name: property.City,
    image: property.Image,
    propertyCount: property.propertyCount,
    //forRent: property.ForRent,
  }));
}

