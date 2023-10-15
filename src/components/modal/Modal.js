import React from "react";
import { Container } from "./style";

export const Modal = (props) => {
  const { children, onClose = () => {} } = props;
  return (
    <Container onClick={() => onClose()}>
      <div className="modal">
        <button className="close-button" onClick={() => onClose()}>
          X
        </button>
        {children}
      </div>
    </Container>
  );
};
