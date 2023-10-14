import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button.jsx";
import { fechServisSearchImg } from "../API";
export class App extends Component {

state= {
gallery:[],
searchValue:"",
page: 1,
isLoading: false,
error: false

}
// Записую до стану значення пошуку
uppdateSearchbar = (searchName)=> {
  this.setState(() => ({
    searchValue: searchName,
  }));
};

handlerButton = ()=> {
  console.log("нажала кнопку")
  this.setState(prevState => prevState.page + 1)
  console.log(this.state.page)
}

async componentDidUpdate(prevProps, prevState) {
  try {
    if (
      prevState.searchValue !== this.state.searchValue &&
      this.state.searchValue !== null &&
      this.state.searchValue !== undefined || 
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true, error: false });
      const searchImg = await fechServisSearchImg(this.state.searchValue, this.state.page);
      toast.success("Images found successfully!")
      this.setState({
        gallery: searchImg.hits,
        isLoading: false, 
        error: false,
      });
    }
  } catch (error) {
    this.setState({ error: true, isLoading: false }); 
  }
}

  render () {
    const { gallery, isLoading, error }= this.state;

  return <div>
  <Searchbar onSubmit={this.uppdateSearchbar} />

  {isLoading && <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />}

  {error && <span>Whoops... Error! Please, reload this page!</span>}

  {gallery.length > 0 && <ImageGallery galleryImages = {gallery} /> }
  <Button onClickButton ={this.handlerButton} />
  <Toaster  position="top-right" /> 
  </div>
  } 
};
