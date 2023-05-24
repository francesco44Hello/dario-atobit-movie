import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

function Example({ image, title, cast, text  }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <>
      <button
        variant="primary"
        onClick={handleShow}
        className="card-div"
        style={{
          backgroundColor: "transparent",
          border: "2px solid black",
          color: "black",
        }}
      >
        <h1 style={{ whiteSpace: "normal" }}>{title}</h1>
        <img alt={title} src={image} height={100} width={100} />
        <div className="text-div">
          <p>{cast}</p>
          
        </div>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        fullscreen={fullscreen}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body centered="true">
          <div className="plot-cast-div">
          <p><strong>Cast: </strong><br></br>{cast}</p>
          <p><strong>Plot: </strong><br></br>{text}</p>
          </div>
         
          <div className="modal-image">
            <img src={image} alt={cast}></img>
          </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: 'rgb(245,197,24)'}}>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor: 'black'}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
