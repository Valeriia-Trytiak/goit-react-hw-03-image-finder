export const ImageGalleryItem = ({ searchImage })=> {

const { id, webformatURL, tags } = searchImage;
return <li key={id}>
<img src={webformatURL} alt={tags} loading="lazy" />
</li>
}