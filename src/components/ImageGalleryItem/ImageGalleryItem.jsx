import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
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
      <li key={id}>
        <img src={webformatURL} alt={tags} loading="lazy" onClick={this.openModal} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Image Modal"
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </li>
    );
  }
}





