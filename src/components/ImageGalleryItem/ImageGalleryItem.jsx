import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';


const customStyles = {
  overlay: {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    backgroundColor: 'transparent',
  },
};

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    if (!this.state.isModalOpen) {
      this.setState({ isModalOpen: true });
    }
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props.searchImage;
    const { isModalOpen } = this.state;

    return (
      <GalleryItem key={id}>
        <GalleryImage src={webformatURL} alt={tags} loading="lazy" onClick={this.openModal} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Image Modal"
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </GalleryItem>
    );
  }
}





