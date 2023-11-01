import React, { useState } from "react";
import frente from "../../img/musculos/frente_650px.png";
import r01 from "../../img/musculos/r01.png";
import r02 from "../../img/musculos/r02.png";
import Polygon from "./Polygon";

function ImgMusculoFrenteSel() {
  // Areas poligonales
  const polygonArea1 = [
    { x: 61, y: 110 },
    { x: 103, y: 82 },
    { x: 117, y: 122 },
  ];
  const polygonArea1b = [
    { x: 250 - 61, y: 110 },
    { x: 250 - 103, y: 82 },
    { x: 250 - 117, y: 122 },
  ];
  const polygonArea2 = [
    { x: 38.5, y: 171 },
    { x: 30, y: 152 },
    { x: 40, y: 120 },
    { x: 74, y: 120 },
    { x: 62, y: 153 },
  ];
  const polygonArea2b = [
    { x: 250 - 38.5, y: 171 },
    { x: 250 - 30, y: 152 },
    { x: 250 - 40, y: 120 },
    { x: 250 - 74, y: 120 },
    { x: 250 - 62, y: 153 },
  ];
  const polygonArea3 = [
    { x: 62, y: 157 },
    { x: 69, y: 166 },
    { x: 57, y: 223 },
    { x: 40, y: 235 },
    { x: 33, y: 205 },
    { x: 38, y: 175 },
  ];
  const polygonArea3b = [
    { x: 250 - 62, y: 157 },
    { x: 250 - 69, y: 166 },
    { x: 250 - 57, y: 223 },
    { x: 250 - 40, y: 235 },
    { x: 250 - 33, y: 205 },
    { x: 250 - 38, y: 175 },
  ];
  const polygonArea4 = [
    { x: 27, y: 214 },
    { x: 50, y: 257 },
    { x: 40, y: 312 },
    { x: 17, y: 278 },
    { x: 17, y: 229 },
  ];
  const polygonArea4b = [
    { x: 250 - 27, y: 214 },
    { x: 250 - 50, y: 257 },
    { x: 250 - 40, y: 312 },
    { x: 250 - 17, y: 278 },
    { x: 250 - 17, y: 229 },
  ];
  const polygonArea5 = [
    { x: 65, y: 150 },
    { x: 76, y: 131 },
    { x: 105, y: 123 },
    { x: 123, y: 132 },
    { x: 120, y: 167 },
    { x: 98, y: 178 },
    { x: 73, y: 168 },
  ];
  const polygonArea5b = [
    { x: 250 - 65, y: 150 },
    { x: 250 - 76, y: 131 },
    { x: 250 - 105, y: 123 },
    { x: 250 - 123, y: 132 },
    { x: 250 - 120, y: 167 },
    { x: 250 - 98, y: 178 },
    { x: 250 - 73, y: 168 },
  ];
  const polygonArea6 = [
    { x: 73, y: 180 },
    { x: 95, y: 180 },
    { x: 95, y: 251 },
    { x: 81, y: 241 },
  ];
  const polygonArea6b = [
    { x: 250 - 73, y: 180 },
    { x: 250 - 95, y: 180 },
    { x: 250 - 95, y: 251 },
    { x: 250 - 81, y: 241 },
  ];
  const polygonArea7 = [
    { x: 100, y: 180 },
    { x: 125, y: 170 },
    { x: 250 - 100, y: 180 },
    { x: 250 - 102, y: 294 },
    { x: 125, y: 305 },
    { x: 102, y: 294 },
  ];
  const polygonArea8 = [
    { x: 95.5, y: 270 },
    { x: 90, y: 283 },
    { x: 75, y: 275 },
    { x: 71, y: 262 },
    { x: 80, y: 249 },
    { x: 93.5, y: 256.5 },
  ];
  const polygonArea8b = [
    { x: 250 - 95.5, y: 270 },
    { x: 250 - 90, y: 283 },
    { x: 250 - 75, y: 275 },
    { x: 250 - 71, y: 262 },
    { x: 250 - 80, y: 249 },
    { x: 250 - 93.5, y: 256.5 },
  ];
  const polygonArea9 = [
    { x: 66, y: 328 },
    { x: 72, y: 280 },
    { x: 80, y: 288 },
    { x: 76.5, y: 315 },
    { x: 72, y: 325 },
  ];
  const polygonArea9b = [
    { x: 250 - 66, y: 328 },
    { x: 250 - 72, y: 280 },
    { x: 250 - 80, y: 288 },
    { x: 250 - 76.5, y: 315 },
    { x: 250 - 72, y: 325 },
  ];
  const polygonArea10 = [
    { x: 76, y: 273 },
    { x: 89.4, y: 284 },
    { x: 87.7, y: 287.7 },
    { x: 84.2, y: 285.2 },
    { x: 84.2, y: 310 },
    { x: 105, y: 373 },
    { x: 83.4, y: 418 },
    { x: 77.5, y: 418 },
    { x: 65, y: 360 },
    { x: 65, y: 330 },
    { x: 77, y: 320 },
    { x: 80, y: 300 },
    { x: 80, y: 286 },
    { x: 74, y: 278.5 },
  ];
  const polygonArea10b = [
    { x: 250 - 76, y: 273 },
    { x: 250 - 89.4, y: 284 },
    { x: 250 - 87.7, y: 287.7 },
    { x: 250 - 84.2, y: 285.2 },
    { x: 250 - 84.2, y: 310 },
    { x: 250 - 105, y: 373 },
    { x: 250 - 83.4, y: 418 },
    { x: 250 - 77.5, y: 418 },
    { x: 250 - 65, y: 360 },
    { x: 250 - 65, y: 330 },
    { x: 250 - 77, y: 320 },
    { x: 250 - 80, y: 300 },
    { x: 250 - 80, y: 286 },
    { x: 250 - 74, y: 278.5 },
  ];
  const polygonArea11 = [
    { x: 92.5, y: 297 },
    { x: 92.5, y: 285 },
    { x: 113.5, y: 321 },
    { x: 123, y: 335 },
    { x: 121, y: 387.5 },
    { x: 115, y: 387.5 },
    { x: 104.5, y: 350 },
  ];
  const polygonArea11b = [
    { x: 250 - 92.5, y: 297 },
    { x: 250 - 92.5, y: 285 },
    { x: 250 - 113.5, y: 321 },
    { x: 250 - 123, y: 335 },
    { x: 250 - 121, y: 387.5 },
    { x: 250 - 115, y: 387.5 },
    { x: 250 - 104.5, y: 350 },
  ];
  const polygonArea12 = [
    { x: 62, y: 350 },
    { x: 69.5, y: 386.5 },
    { x: 75, y: 399 },
    { x: 77.5, y: 416 },
    { x: 78, y: 430 },
    { x: 69.5, y: 438.5 },
    { x: 61, y: 438.5 },
    { x: 56, y: 389.5 },
  ];
  const polygonArea12b = [
    { x: 250 - 62, y: 350 },
    { x: 250 - 69.5, y: 386.5 },
    { x: 250 - 75, y: 399 },
    { x: 250 - 77.5, y: 416 },
    { x: 250 - 78, y: 430 },
    { x: 250 - 69.5, y: 438.5 },
    { x: 250 - 61, y: 438.5 },
    { x: 250 - 56, y: 389.5 },
  ];
  const polygonArea13 = [
    { x: 102, y: 365.5 },
    { x: 110.5, y: 393.3 },
    { x: 114.5, y: 418 },
    { x: 113, y: 442 },
    { x: 105.5, y: 447.5 },
    { x: 92.7, y: 443 },
    { x: 85, y: 432.5 },
    { x: 82, y: 419.5 },
  ];
  const polygonArea13b = [
    { x: 250 - 102, y: 365.5 },
    { x: 250 - 110.5, y: 393.3 },
    { x: 250 - 114.5, y: 418 },
    { x: 250 - 113, y: 442 },
    { x: 250 - 105.5, y: 447.5 },
    { x: 250 - 92.7, y: 443 },
    { x: 250 - 85, y: 432.5 },
    { x: 250 - 82, y: 419.5 },
  ];
  const polygonArea14 = [
    { x: 63.5, y: 464.5 },
    { x: 71.5, y: 478.5 },
    { x: 71.5, y: 555.5 },
    { x: 60, y: 575.5 },
    { x: 58.3, y: 546 },
    { x: 52.25, y: 500 },
  ];
  const polygonArea14b = [
    { x: 250 - 63.5, y: 464.5 },
    { x: 250 - 71.5, y: 478.5 },
    { x: 250 - 71.5, y: 555.5 },
    { x: 250 - 60, y: 575.5 },
    { x: 250 - 58.3, y: 546 },
    { x: 250 - 52.25, y: 500 },
  ];
  const polygonArea15 = [
    { x: 102.5, y: 466 },
    { x: 108.5, y: 497.25 },
    { x: 104, y: 513.5 },
    { x: 97.5, y: 530 },
    { x: 94.25, y: 538.3 },
    { x: 89.4, y: 538.3 },
    { x: 79.85, y: 525.15 },
    { x: 78.5, y: 510 },
    { x: 81, y: 496.7 },
  ];
  const polygonArea15b = [
    { x: 250 - 102.5, y: 466 },
    { x: 250 - 108.5, y: 497.25 },
    { x: 250 - 104, y: 513.5 },
    { x: 250 - 97.5, y: 530 },
    { x: 250 - 94.25, y: 538.3 },
    { x: 250 - 89.4, y: 538.3 },
    { x: 250 - 79.85, y: 525.15 },
    { x: 250 - 78.5, y: 510 },
    { x: 250 - 81, y: 496.7 },
  ];
  function convertToPixelCoordinates(image, coordinates) {
    const width = image.width;
    const height = image.height;
    const pixelCoordinates = coordinates.map((coord) => ({
      x: (coord.x / 100) * width,
      y: (coord.y / 100) * height,
    }));
    return pixelCoordinates;
  }
  const [showImage, setShowImage] = useState(null);

  const handleMouseEnter = (image) => {
    setShowImage(image);
  };

  const handleMouseLeave = () => {
    setShowImage(null);
  };
  return (
    <div className="image-container">
      <img src={frente} id="imagen0" alt="Imagen de fondo" />
      <Polygon
        points={polygonArea1}
        pic={r01}
        style={{ display: "block" }}
      />
      {/* <Polygon
        points={polygonArea2}
        img={r02}
        style={{ display: "block" }}
      /> */}
      <Polygon points={polygonArea2} style={{ display: "block" }} />
      {/* <Polygon points={polygonArea2b} style={{ display: "block" }} /> */}
      {/* <Polygon points={polygonArea3} style={{ display: "block" }} />
      <Polygon points={polygonArea3b} style={{ display: "block" }} />
      <Polygon points={polygonArea4} style={{ display: "block" }} />
      <Polygon points={polygonArea4b} style={{ display: "block" }} />
      <Polygon points={polygonArea5} style={{ display: "block" }} />
      <Polygon points={polygonArea5b} style={{ display: "block" }} />
      <Polygon points={polygonArea6} style={{ display: "block" }} />
      <Polygon points={polygonArea6b} style={{ display: "block" }} />
      <Polygon points={polygonArea7} style={{ display: "block" }} />
      <Polygon points={polygonArea8} style={{ display: "block" }} />
      <Polygon points={polygonArea8b} style={{ display: "block" }} />
      <Polygon points={polygonArea9} style={{ display: "block" }} />
      <Polygon points={polygonArea9b} style={{ display: "block" }} />
      <Polygon points={polygonArea10} style={{ display: "block" }} />
      <Polygon points={polygonArea10b} style={{ display: "block" }} />
      <Polygon points={polygonArea11} style={{ display: "block" }} />
      <Polygon points={polygonArea11b} style={{ display: "block" }} />
      <Polygon points={polygonArea12} style={{ display: "block" }} />
      <Polygon points={polygonArea12b} style={{ display: "block" }} />
      <Polygon points={polygonArea13} style={{ display: "block" }} />
      <Polygon points={polygonArea13b} style={{ display: "block" }} />
      <Polygon points={polygonArea14} style={{ display: "block" }} />
      <Polygon points={polygonArea14b} style={{ display: "block" }} />
      <Polygon points={polygonArea15} style={{ display: "block" }} />
      <Polygon points={polygonArea15b} style={{ display: "block" }} /> */}
      <img src={r01} id="imagen1" alt="Imagen 1" style={{ display: "none" }} />
      <img src={r02} id="imagen2" alt="Imagen 2" style={{ display: "none" }} />
    </div>
  );
}

export default ImgMusculoFrenteSel;
