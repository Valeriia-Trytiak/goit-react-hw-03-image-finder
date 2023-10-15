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

// Записую до стану значення пошуку, скидаю поточну сторінку та масив зображень
  uppdateSearchbar = (searchName)=> {
    this.setState(() => ({
      searchValue: searchName,
      gallery: [],
      page: 1
    }));
  };

//При кліку по Завантажити ще, змінюю стейт
handlerButton = ()=> {
  this.setState(prevState => ({ page: prevState.page + 1 }));
}

async componentDidUpdate(prevProps, prevState) {
  const { searchValue, page } = this.state;
  try {
      if ((prevState.searchValue !== searchValue && searchValue) || page !== prevState.page) {

      this.setState({ isLoading: true, error: false });
      const searchImg = await fechServisSearchImg(searchValue, page);
      toast.success("Images found successfully!")

      this.setState({
        gallery: page === 1 ? searchImg.hits : [...prevState.gallery, ...searchImg.hits],
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
  {gallery.length > 0 &&  <Button onClickButton ={this.handlerButton}/> } 
  <Toaster  position="top-right" /> 
  </div>
  } 
};
