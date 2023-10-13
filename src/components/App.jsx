import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {

state= {
gallery:[],
searchValue:"",
isLoading: false,
error: false

}

// Записую до стану значення пошуку
uppdateSearchbar = (searchName)=> {
  console.log(searchName)
  this.setState(() => ({
    searchValue: searchName,
  }));
}

  render () {
    return <div>
    <Searchbar onSubmit={this.uppdateSearchbar}></Searchbar>
    <ImageGallery></ImageGallery>
  </div>
  } 
};
