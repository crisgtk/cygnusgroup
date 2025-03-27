const { getGallery } = require("@/server/galery");


let cachedGalery = null;

async function fechGalery(id) {
    console.log("entre a cachedGalery:::", id);
    if (!cachedGalery) {
        cachedGalery = await getGallery(id);
    }
    return cachedGalery;
    
}

export async function getGalleryTransform(id) {
    const gallery = await fechGalery(id);
    return gallery.map((gallery) => ({
        src: gallery.url,
        alt: gallery.orden + ".jpg",
    }));
}
