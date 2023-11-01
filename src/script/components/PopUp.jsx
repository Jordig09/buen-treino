import React from "react";
import { Modal, Button } from "react-bootstrap";
import ImgFrente from "./ImgFrente";

 function Popup({setShow , show}) {
    return (
      <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: "700" }}
          >
            ¿Dónde sentís la sobrecarga?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <ImgFrente />
        </Modal.Body>
        <Modal.Footer>
          <p>musculos seleccionados</p>
          <Button
            variant="primary"
            className="text-white"
            onClick={() => setShow(false)}
          >
            Aplicar
          </Button>
        </Modal.Footer>
      </Modal>
    );}

    export default Popup;