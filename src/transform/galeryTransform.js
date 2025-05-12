const { getGallery } = require("@/server/galery");

async function fechGalery(id) {
    try {
        const gallery = await getGallery(id);
        return gallery;
    } catch (error) {
        console.error("Error in fechGalery:", error);
        throw error;
    }
}

export async function getGalleryTransform(id) {
    try {
        const gallery = await fechGalery(id);
        return gallery.map((item) => ({
            src: item.url,
            alt: `${item.orden}.jpg`,
        }));
    } catch (error) {
        console.error("Error in getGalleryTransform:", error);
        throw error; 
    }
}
