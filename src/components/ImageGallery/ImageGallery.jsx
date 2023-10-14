import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery = ({ galleryImages })=> {
return <ul>   
{galleryImages.map((galleryImage) => (<ImageGalleryItem key={galleryImage.id} searchImage={galleryImage}/>))}
</ul>
}



