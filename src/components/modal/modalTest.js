import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

function ModalComponent({ image, title, cast, text, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };
  const [fullscreen, setFullscreen] = useState(true);

  // Check if the plot is available or null
  const isPlotAvailable = text !== null;
  // console.log(id)
  return (
    <div key={id}> {/* Apply the key prop to a wrapping element */}
      <button
        variant="primary"
        onClick={handleShow}
        className="card-div"
        style={{
          backgroundColor: "#eeeeeeee",
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
            <p>
              <strong>Cast: </strong>
              <br />
              {cast}
            </p>
            {isPlotAvailable ? (
              <p>
                <strong>Plot: </strong>
                <br />
                {text}
              </p>
            ) : (
              <p>Plot not available for this title.</p>
            )}
          </div>

          <div className="modal-image">
            <img src={image} alt={cast} />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(245,197,24)" }}>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ backgroundColor: "black" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;
