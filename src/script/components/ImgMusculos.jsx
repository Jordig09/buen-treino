import { Image } from "react-bootstrap";
import React from "react";

import espalda from "../../img/espalda_650px.png";
import frente from "../../img/frente_650px.png";

function ImgMusculos() {
  return (
    <div
      className="d-flex justify-content-between"
      style={{ maxWidth: "390px", width: "100%", position: "relative" }}
    >
      <div style={{ maxWidth: "50%", position: "relative" }}>
        <Image
          src={frente}
          draggable={false}
          alt="frente"
          className="img-fluid"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ maxWidth: "50%", position: "relative" }}>
        <Image
          src={espalda}
          draggable={false}
          alt="espalda"
          className="img-fluid"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default ImgMusculos;
