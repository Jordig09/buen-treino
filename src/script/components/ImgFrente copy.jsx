import React, { useState, useEffect } from "react";
import frente from "../../img/musculos/frente_650px.png";
import r01 from "../../img/musculos/r01.png";
import r02 from "../../img/musculos/r02.png";
import pointInPolygon from "point-in-polygon";
import { Image } from "react-bootstrap";

function ImgFrente() {
  const [mouseLocation, setMouseLocation] = useState([0, 0]);
  const [desplazamientoX, setDesplazamientoX] = useState(0);
  const [desplazamientoY, setDesplazamientoY] = useState(0);

  // Areas poligonales

  const pointInPolygon = require("point-in-polygon");

  const polygonArea1 = [
    [61, 110],
    [103, 82],
    [117, 122],
  ];

  const polygonArea2 = [
    [38.5, 171],
    [30, 152],
    [40, 120],
    [74, 120],
    [62, 153],
  ];
  const polygonArea3 = [
    [62, 157],
    [69, 166],
    [57, 223],
    [40, 235],
    [33, 205],
    [38, 175],
  ];
  const polygonArea4 = [
    [27, 214],
    [50, 257],
    [40, 312],
    [17, 278],
    [17, 229],
  ];
  const polygonArea5 = [
    [65, 150],
    [76, 131],
    [105, 123],
    [123, 132],
    [120, 167],
    [98, 178],
    [73, 168],
  ];
  const polygonArea6 = [
    [73, 180],
    [95, 180],
    [95, 251],
    [81, 241],
  ];
  const polygonArea7 = [
    [100, 180],
    [125, 170],
    [250 - 100, 180],
    [250 - 102, 294],
    [125, 305],
    [102, 294],
  ];

  const polygonArea8 = [
    [95.5, 270],
    [90, 283],
    [75, 275],
    [71, 262],
    [80, 249],
    [93.5, 256.5],
  ];
  const polygonArea9 = [
    [66, 328],
    [72, 280],
    [80, 288],
    [76.5, 315],
    [72, 325],
  ];
  const polygonArea10 = [
    [76, 273],
    [89.4, 284],
    [87.7, 287.7],
    [84.2, 285.2],
    [84.2, 310],
    [105, 373],
    [83.4, 418],
    [77.5, 418],
    [65, 360],
    [65, 330],
    [77, 320],
    [80, 300],
    [80, 286],
    [74, 278.5],
  ];
  const polygonArea11 = [
    [92.5, 297],
    [92.5, 285],
    [113.5, 321],
    [123, 335],
    [121, 387.5],
    [115, 387.5],
    [104.5, 350],
  ];
  const polygonArea12 = [
    [62, 350],
    [69.5, 386.5],
    [75, 399],
    [77.5, 416],
    [78, 430],
    [69.5, 438.5],
    [61, 438.5],
    [56, 389.5],
  ];
  const polygonArea13 = [
    [102, 365.5],
    [110.5, 393.3],
    [114.5, 418],
    [113, 442],
    [105.5, 447.5],
    [92.7, 443],
    [85, 432.5],
    [82, 419.5],
  ];
  const polygonArea14 = [
    [63.5, 464.5],
    [71.5, 478.5],
    [71.5, 555.5],
    [60, 575.5],
    [58.3, 546],
    [52.25, 500],
  ];
  const polygonArea15 = [
    [102.5, 466],
    [108.5, 497.25],
    [104, 513.5],
    [97.5, 530],
    [94.25, 538.3],
    [89.4, 538.3],
    [79.85, 525.15],
    [78.5, 510],
    [81, 496.7],
  ];
  const polygonArea1b = [
    [250 - 61, 110],
    [250 - 103, 82],
    [250 - 117, 122],
  ];
  const polygonArea2b = [
    [250 - 38.5, 171],
    [250 - 30, 152],
    [250 - 40, 120],
    [250 - 74, 120],
    [250 - 62, 153],
  ];

  const polygonArea3b = [
    [250 - 62, 157],
    [250 - 69, 166],
    [250 - 57, 223],
    [250 - 40, 235],
    [250 - 33, 205],
    [250 - 38, 175],
  ];

  const polygonArea4b = [
    [250 - 27, 214],
    [250 - 50, 257],
    [250 - 40, 312],
    [250 - 17, 278],
    [250 - 17, 229],
  ];

  const polygonArea5b = [
    [250 - 65, 150],
    [250 - 76, 131],
    [250 - 105, 123],
    [250 - 123, 132],
    [250 - 120, 167],
    [250 - 98, 178],
    [250 - 73, 168],
  ];

  const polygonArea6b = [
    [250 - 73, 180],
    [250 - 95, 180],
    [250 - 95, 251],
    [250 - 81, 241],
  ];

  const polygonArea8b = [
    [250 - 95.5, 270],
    [250 - 90, 283],
    [250 - 75, 275],
    [250 - 71, 262],
    [250 - 80, 249],
    [250 - 93.5, 256.5],
  ];

  const polygonArea9b = [
    [250 - 66, 328],
    [250 - 72, 280],
    [250 - 80, 288],
    [250 - 76.5, 315],
    [250 - 72, 325],
  ];

  const polygonArea10b = [
    [250 - 76, 273],
    [250 - 89.4, 284],
    [250 - 87.7, 287.7],
    [250 - 84.2, 285.2],
    [250 - 84.2, 310],
    [250 - 105, 373],
    [250 - 83.4, 418],
    [250 - 77.5, 418],
    [250 - 65, 360],
    [250 - 65, 330],
    [250 - 77, 320],
    [250 - 80, 300],
    [250 - 80, 286],
    [250 - 74, 278.5],
  ];

  const polygonArea11b = [
    [250 - 92.5, 297],
    [250 - 92.5, 285],
    [250 - 113.5, 321],
    [250 - 123, 335],
    [250 - 121, 387.5],
    [250 - 115, 387.5],
    [250 - 104.5, 350],
  ];

  const polygonArea12b = [
    [250 - 62, 350],
    [250 - 69.5, 386.5],
    [250 - 75, 399],
    [250 - 77.5, 416],
    [250 - 78, 430],
    [250 - 69.5, 438.5],
    [250 - 61, 438.5],
    [250 - 56, 389.5],
  ];

  const polygonArea13b = [
    [250 - 102, 365.5],
    [250 - 110.5, 393.3],
    [250 - 114.5, 418],
    [250 - 113, 442],
    [250 - 105.5, 447.5],
    [250 - 92.7, 443],
    [250 - 85, 432.5],
    [250 - 82, 419.5],
  ];

  const polygonArea14b = [
    [250 - 63.5, 464.5],
    [250 - 71.5, 478.5],
    [250 - 71.5, 555.5],
    [250 - 60, 575.5],
    [250 - 58.3, 546],
    [250 - 52.25, 500],
  ];

  const polygonArea15b = [
    [250 - 102.5, 466],
    [250 - 108.5, 497.25],
    [250 - 104, 513.5],
    [250 - 97.5, 530],
    [250 - 94.25, 538.3],
    [250 - 89.4, 538.3],
    [250 - 79.85, 525.15],
    [250 - 78.5, 510],
    [250 - 81, 496.7],
  ];

  // ----- Definición de la ubicación de la imagen -----
  useEffect(() => {
    const image = document.getElementById("imagen0");
    if (image) {
      const rect = image.getBoundingClientRect();
      setDesplazamientoX(rect.left);
      setDesplazamientoY(rect.top);
    }
  }, [mouseLocation]);

  // ----- definición de la ubicación del mouse dentro de la imagen -----

  const handleOnClick = (e) => {
    setMouseLocation([
      e.clientX - desplazamientoX,
      e.clientY - desplazamientoY,
    ]);
  };

  // ----- comparador mouse vs area poligonal -----
  useEffect(() => {
    pointInPolygon(mouseLocation, polygonArea1) && setShow1(!show1);
  }, [mouseLocation]);

  const [show1, setShow1] = useState(false);

  return (
    <>
      <div className="image-container" onClick={handleOnClick}>
        <img src={frente} id="imagen0" alt="Imagen de fondo" />
        <img
          src={r01}
          id="imagen1"
          alt="Imagen 1"
          style={{ display: show1 ? "block" : "none" }}
        />
      </div>
    </>
  );
}

export default ImgFrente;
