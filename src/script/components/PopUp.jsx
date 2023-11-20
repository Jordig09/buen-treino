import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import ImgFrente from "./ImgFrente";
import ImgEspalda from "./ImgEspalda";

function Popup({ setShow, show }) {
  return (
    <Modal
      show={show}
      size="lg"
      onHide={() => setShow(false)}
      className="w-100 "
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="py-2">
        <Modal.Title
          style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: "700" }}
        >
          ¿Dónde sentís la sobrecarga?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-0 my-2 p-0">
        <Row className="m-0 p-0 " 
        style={{justifyContent: "space-evenly"}}
        >
          <Col sm={6} className="d-flex m-0 p-0 justify-content-center">
            <ImgFrente className="m-0 px-0 " />
          </Col>
          <Col sm={6} className="d-flex m-0 p-0  justify-content-center">
            <ImgEspalda className="m-0 px-0" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="w-100 m-0 p-0">
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
  );
}

export default Popup;
