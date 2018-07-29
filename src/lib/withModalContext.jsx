import React from "react";
import ModalContext from "./ModalContext";

const withModalContext = component => (
  <ModalContext.Consumer>{component}</ModalContext.Consumer>
);

export default withModalContext;
