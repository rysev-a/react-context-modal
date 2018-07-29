import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ModalComponent = ({
  isModalOpen,
  closeModal,
  Content,
  modalClassName,
  backgroundClassName,
  activeClassName
}) => (
  <div
    className={classNames(modalClassName, {
      [activeClassName]: isModalOpen
    })}
  >
    <div className={backgroundClassName} onClick={closeModal} />
    <Content closeModal={closeModal} />
  </div>
);

ModalComponent.propTypes = {
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  Content: PropTypes.func,
  modalClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  backgroundClassName: PropTypes.string
};

export default ModalComponent;
