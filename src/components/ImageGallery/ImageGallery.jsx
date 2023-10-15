import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery = ({ galleryImages })=> {
    console.log(galleryImages);
return <ul>   
{galleryImages.map((galleryImage) => (<ImageGalleryItem key={galleryImage.id} searchImage={galleryImage}/>))}
</ul>
}



