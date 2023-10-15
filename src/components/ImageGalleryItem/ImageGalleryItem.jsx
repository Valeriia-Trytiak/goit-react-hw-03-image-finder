// import React, { Component } from 'react';
// import Modal from 'react-modal';

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };
  
//   Modal.setAppElement('#root');


  
export const ImageGalleryItem = ({ searchImage })=> {

const { id, webformatURL, tags } = searchImage;
return <li key={id}>
<img src={webformatURL} alt={tags} loading="lazy" />
{/* <Modal
        isOpen={true}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={largeImageURL} alt={tags} loading="lazy" />
      </Modal> */}
</li>
}


// export class ImageGalleryItem extends Component {
//     state = {
//       isModalOpen: false,
//     };
  
//     openModal = () => {
//       this.setState({ isModalOpen: true });
//     };
  
//     closeModal = () => {
//       this.setState({ isModalOpen: false });
//     };
  
//     render() {
//       const { id, webformatURL, tags, largeImageURL } = this.props;
//       const { isModalOpen } = this.state;
  
//       return (
//         <li key={id}>
//           <img src={webformatURL} alt={tags} loading="lazy" onClick={this.openModal} />
//           <Modal
//             isOpen={isModalOpen}
//             onRequestClose={this.closeModal}
//             style={customStyles}
//             contentLabel="Image Modal"
//           >
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         </li>
//       );
//     }
//   }