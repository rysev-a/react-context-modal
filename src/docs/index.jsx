import React from "react";
import { render } from "react-dom";
import {
  withModalContext,
  modalApi,
  ModalComponent,
  ModalProvider
} from "../../lib";
import "./styles.css";

const ModalContent = ({ closeModal }) => (
  <div className="modal-content">
    <div className="modal-box">modal content</div>
    <button onClick={closeModal}>close</button>
  </div>
);

const App = () => (
  <main className="main">
    <h1>Demo react modal window</h1>
    <ModalProvider>
      {withModalContext(props => (
        <ModalComponent
          modalClassName="modal"
          activeClassName="is-active"
          backgroundClassName="modal-background"
          {...props}
        />
      ))}
      <button
        onClick={() => {
          modalApi.openModal(ModalContent);
        }}
      >
        Open Modal
      </button>
    </ModalProvider>
  </main>
);

render(<App />, document.getElementById("app"));
