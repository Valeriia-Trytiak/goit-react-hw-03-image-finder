import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImagesList } from "./ImageGallery.styled"


export const ImageGallery = ({ galleryImages })=> {
return <ImagesList>   
{galleryImages.map((galleryImage) => (<ImageGalleryItem key={galleryImage.id} searchImage={galleryImage}/>))}
</ImagesList>
}



