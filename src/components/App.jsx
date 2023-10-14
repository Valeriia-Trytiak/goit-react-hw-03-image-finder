import { ColorRing } from 'react-loader-spinner';

import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fechServisSearchImg } from "../API";
export class App extends Component {

state= {
gallery:[],
searchValue:"",
isLoading: false,
error: false

}
// Записую до стану значення пошуку
uppdateSearchbar = (searchName)=> {
  this.setState(() => ({
    searchValue: searchName,
  }));
}

async componentDidUpdate(prevProps, prevState) { 
try {
  if (
    prevState.searchValue !== this.state.searchValue &&
    this.state.searchValue !== null &&
    this.state.searchValue !== undefined
  ) 
  {
  this.setState({isLoading: true});
  const searchImg = await fechServisSearchImg(this.state.searchValue);
  this.setState({
  gallery: searchImg.hits,
  });
  }
} catch (error) {
  this.setState({ error: true });
} finally{
  this.setState({ isLoading: false});
}

}

  render () {
    const { gallery, isLoading }= this.state;

    return <div>
    <Searchbar onSubmit={this.uppdateSearchbar}></Searchbar>
  {isLoading && <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}
    {gallery.length > 0 && <ImageGallery galleryImages = {gallery} /> }
      
    
    
  </div>
  } 
};
