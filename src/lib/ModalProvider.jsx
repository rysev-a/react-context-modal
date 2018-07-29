import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';
import modalApi from './modal-api';

class ModalProvider extends Component {
  constructor(props) {
    super(props);

    this.openModal = Content =>
      this.setState({
        isModalOpen: true,
        Content: Content,
      });

    this.closeModal = () => this.setState({ isModalOpen: false });

    this.state = {
      isModalOpen: false,
      closeModal: this.closeModal,
      openModal: this.openModal,
      Content: () => null,
    };

    modalApi.closeModal = this.closeModal;
    modalApi.openModal = this.openModal;
  }

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default ModalProvider;
