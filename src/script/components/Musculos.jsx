import React from "react";
import { Modal, Button } from "react-bootstrap";
import ImgMusculoFrenteSel from "./ImgMusculoFrenteSel";

function Popup() {
  return (
    <Modal
      size="lg"
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
        {/* <ImgMusculos /> */}
        <ImgMusculoFrenteSel />
      </Modal.Body>
      <Modal.Footer>
        <p>musculos seleccionados</p>
        <Button variant="primary" className="text-white">
          Aplicar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
