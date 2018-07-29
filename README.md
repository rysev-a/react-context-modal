# React modal component

This is simple react modal HOC component with use new React Context API

## Table of Contents

- [Installation](#installation)
- [API documentation](#api-documentation)
- [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install react-context-modal
    $ yarn add react-context-modal

## API documentation

React modal lib consist of four heplers:

- `ModalProvider` - wrapper for app with modal context
- `ModalComponent` - modal component for show modal window
- `withModalContext` - hoc helper for inject modal context in component
- `modalApi` - helper for run modal actions in any place

## Examples

Here is a simple example of react-context-modal:

```jsx
import React from "react";
import { render } from "react-dom";
import {
  withModalContext,
  modalApi,
  ModalComponent,
  ModalProvider
} from "react-context-modal";
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
```

```css
.modal {
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 40;
}

.modal.is-active {
  display: flex;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.modal-background {
  background-color: rgba(10, 10, 10, 0.86);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.modal-content {
  margin: 0 auto;
  max-height: calc(100vh - 40px);
  width: 640px;
  overflow: auto;
  position: relative;
  display: block;
  z-index: 1;
}

.modal-box {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}
```

You can run in a local development server using `npm run dev` or `yarn run dev` or view [demo](https://rysev-a.github.io/react-context-modal/)
