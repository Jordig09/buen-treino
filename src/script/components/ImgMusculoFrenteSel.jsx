import React, { useEffect, useState } from "react";
import { Figure } from "react-bootstrap";
import frente from "../../img/musculos/frente_650px.png";
import zona1 from "../../img/musculos/f01.svg";

const ImgMusculoFrenteSel = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch(zona1)
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

  const containerStyle = {
    position: 'relative', // Para posicionar elementos dentro
    width: '100%',
    height: 'auto', // Ajustar el alto automáticamente
  };

  const svgStyle = {
    position: 'absolute', // Posicionamiento absoluto
    top: 0, // Colocarlo en la parte superior
    left: 0, // Colocarlo en la parte izquierda
    width: '100%', // Ajustar al ancho del contenedor
    height: 'auto', // Ajustar el alto automáticamente
  };

  const areaStyle = {
    fill: 'red',
    zIndex: 1,
    transition: 'fill 0.3s',
  };

  const areaHoverStyle = {
    fill: 'green',
  };

  return (
    <div style={containerStyle}>
      <Figure>
        <img
          src={frente}
          alt="Imagen"
          useMap="#imagemap"
          draggable={false}
          className="img-fluid"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <svg
          src={zona1}
          alt="SVG"
          style={svgStyle}
        >
          {/* Aquí puedes agregar el contenido del SVG */}
        </svg>
        <map name="imagemap">
          {points.map((point, index) => (
            <area
              key={index}
              shape="poly"
              coords={point.join(",")}
              alt={`Área ${index}`}
              style={areaStyle}
              onMouseEnter={(e) => {
                e.target.style = { ...e.target.style, ...areaHoverStyle };
                console.log(`Entró en el área ${index}`);
              }}
              onMouseLeave={(e) => {
                e.target.style = { ...e.target.style, ...areaStyle };
              }}
            />
          ))}
        </map>
      </Figure>
    </div>
  );
};

export default ImgMusculoFrenteSel;
