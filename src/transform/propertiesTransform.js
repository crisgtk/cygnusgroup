import { getProperties, getPropertyDescriptions } from "@/server/properties";


  export async function getSliderItemsTransform() {
    const properties = await getProperties();
    return properties.map((property) => ({
      image: property.Image,
      price: property.price,
      title: property.Title,
      description: property.Description1,
    }));
  }

  export async function getLocationTransform() {
    const propertiesDescriptions = await getPropertyDescriptions();
    return propertiesDescriptions.map((property) => ({
        value: property.propertyId.toString(),
        label: property.Description,
      }));

  }

  export async function getListings() {
    const listings = await getProperties();
    return listings.map((property) => ({
      id: property.Id,
      image: property.Image,
      title: property.Title,
      city: property.City,
      location: property.location,
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
    }));
  }

