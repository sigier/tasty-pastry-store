 import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
  };
  
  const OverlayModal = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
const portalElement = document.getElementById("overlaymodal");

const Modal = (props) => {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(
          <OverlayModal>{props.children}</OverlayModal>,
          portalElement
        )}
      </React.Fragment>
    );
  };
  
  export default Modal;