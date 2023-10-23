import React, { useEffect, useState, useRef } from "react";
import { Container, Image } from "react-bootstrap";
import frente from "../../img/musculos/frente_650px.png";
import espalda from "../../img/musculos/espalda_650px.png";
import zona1 from "../../img/musculos/f01.svg";
import zona1a from "../../img/musculos/f01c.png";
import zona1b from "../../img/musculos/f01b.png";
import Papa from 'papaparse';

function ImgMusculoFrenteSel() {
  const [selectedZone, setSelectedZone] = useState(null);
  const svgMap = () => {
    const [points, setPoints] = useState([]);
  
    useEffect(() => {
      // Cargar y analizar el contenido del archivo SVG (ajusta la ruta)
      fetch("../../img/musculos/f01.svg")
        .then(response => response.text())
        .then(svgContent => {
          const parser = new DOMParser();
          const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
          const polyline = svgDocument.querySelector('polyline');
          
          if (polyline) {
            const pointsString = polyline.getAttribute('points');
            const parsedPoints = pointsString.split(' ').map(point => point.split(','));
            setPoints(parsedPoints);
          }
        });
    }, []);
  }

  let muscleImagesA = []; // img en blanco. Determinan cuando se ingresó a un area específica
  for (let index = 1; index < 1; index++) {
    if (index < 10) {
      muscleImagesA[index] = [
        require("../../img/musculos/f0" + index + "a.png"),
      ];
    } else {
      muscleImagesA[index] = [
        require("../../img/musculos/f" + index + "a.png"),
      ];
    }
  }

  let muscleImagesB = []; // img en rojo. Indican que area se seleccionó
  for (let index = 1; index < 1; index++) {
    if (index < 10) {
      muscleImagesB[index] = [
        require("../../img/musculos/f0" + index + "b.png"),
      ];
    } else {
      muscleImagesB[index] = [
        require("../../img/musculos/f" + index + "b.png"),
      ];
    }
  }

  return (
    <div>
      <img src={frente} alt="Imagen" useMap="#imagemap" />
      <map name="imagemap">
        {points.map((point, index) => (
          <area
            key={index}
            shape="poly"
            coords={point.join(',')}
            alt={`Área ${index}`}
            // Agregar otros atributos y eventos según sea necesario
          />
        ))}
      </map>
    </div>
  );

  return (
    <Container
      className="d-flex justify-content-between"
      style={{
        maxWidth: "390px",
        width: "100%",
        position: "relative",
      }}
    >
      <div  
        style={{  
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        <Image
          src={frente}
          draggable={false}
          alt={`musculos`}
          className="img-fluid"
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <Image
          src={zona1a}
          draggable={false}
          alt={`musculos`}
          className="img-fluid"
          style={{
            width: "100%",
            height: "auto",
            zIndex: 1,
            position: "absolute",
            left: 0,
            pointerEvents: "none", // Evitar eventos en la zona transparente
          }}
        />
        <div
          onMouseEnter={() => {
            console.log("Mouse entered zona1b");
            setSelectedZone(zona1b);
          }}
          onMouseLeave={() => setSelectedZone(null)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          

        {selectedZone && (
          <Image
            src={selectedZone}
            draggable={false}
            alt="zona"
            className="img-fluid"
            style={{
              width: "100%",
              height: "auto",
              zIndex: 1,
              position: "absolute",
              left: 0,
              pointerEvents: "none",
            }}
          />
        )}
        {muscleImagesA.map((image, index) => (
          <>
            <Image
              key={index}
              src={image}
              draggable={false}
              alt={`musculo ${index + 1}`}
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: -0.5,
                right: 1.5,
                pointerEvents: "none",
                zIndex: 1,
                opacity: 1,
              }}
            />
            <Image
              key={index}
              src={image}
              draggable={false}
              alt={`musculo ${index + 1}`}
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: -0.5,
                right: -1.5,
                pointerEvents: "none",
                zIndex: 1,
                transform: "scaleX(-1)",
                opacity: 0.1,
              }}
            />
          </>
        ))}
        {muscleImagesB.map((image, index) => (
          <>
            <Image
              key={index}
              src={image}
              draggable={false}
              alt={`musculo ${index + 1}`}
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: -0.5,
                right: 1.5,
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <Image
              key={index}
              src={image}
              draggable={false}
              alt={`musculo ${index + 1}`}
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: -0.5,
                right: -1.5,
                pointerEvents: "none",
                zIndex: 1,
                transform: "scaleX(-1)",
              }}
            />
          </>
        ))}
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        <Image
          src={espalda}
          draggable={false}
          alt={`musculos`}
          hidden={false}
          className="img-fluid"
          style={{
            width: "100%",
            height: "auto",
            zIndex: 0,
          }}
        />
      </div>
      {/* Otras imágenes principales aquí */}
    </Container>
  );
}

export default ImgMusculoFrenteSel;
