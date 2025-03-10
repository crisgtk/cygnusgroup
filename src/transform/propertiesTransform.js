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

