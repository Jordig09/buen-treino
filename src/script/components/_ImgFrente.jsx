import React, { useState } from "react";
import frente from "../../img/musculos/frente_650px.png";
import r01 from "../../img/musculos/r01.png";
import r02 from "../../img/musculos/r02.png";
import Polygon from "./Polygon";
import pointInPolygon from "point-in-polygon";

function ImgFrente() {
  
  // Define el estado para rastrear la ubicación del mouse
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  // Manejador del evento para rastrear la ubicación del mouse  
  // const handleMouseMove = (e) => {
  //   setMouseLocation({ x: e.clientX, y: e.clientY });
  //     };

  // Areas poligonales

    var pointInPolygon = require('point-in-polygon');

const polygonTest = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
console.log(pointInPolygon([ 4.9, 1.2 ], polygonTest)); // false
console.log(pointInPolygon([ 1.8, 1.1 ], polygonTest)); // true
console.log(pointInPolygon([ 1.5, 1.5 ], polygonTest)); // true

const polygonArea1 = [
  [61, 110],
  [103, 82],
  [117, 122],
];
const polygonArea1b = [
  [250 - 61, 110],
  [250 - 103, 82],
  [250 - 117, 122],
];

const polygonArea2 = [
  [38.5, 171],
  [30, 152],
  [40, 120],
  [74, 120],
  [62, 153],
];
const polygonArea2b = [
  [250 - 38.5, 171],
  [250 - 30, 152],
  [250 - 40, 120],
  [250 - 74, 120],
  [250 - 62, 153],
];

const polygonArea3 = [
  [62, 157],
  [69, 166],
  [57, 223],
  [40, 235],
  [33, 205],
  [38, 175],
];
const polygonArea3b = [
  [250 - 62, 157],
  [250 - 69, 166],
  [250 - 57, 223],
  [250 - 40, 235],
  [250 - 33, 205],
  [250 - 38, 175],
];

const polygonArea4 = [
  [27, 214],
  [50, 257],
  [40, 312],
  [17, 278],
  [17, 229],
];
const polygonArea4b = [
  [250 - 27, 214],
  [250 - 50, 257],
  [250 - 40, 312],
  [250 - 17, 278],
  [250 - 17, 229],
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
const polygonArea5b = [
  [250 - 65, 150],
  [250 - 76, 131],
  [250 - 105, 123],
  [250 - 123, 132],
  [250 - 120, 167],
  [250 - 98, 178],
  [250 - 73, 168],
];

const polygonArea6 = [
  [73, 180],
  [95, 180],
  [95, 251],
  [81, 241],
];
const polygonArea6b = [
  [250 - 73, 180],
  [250 - 95, 180],
  [250 - 95, 251],
  [250 - 81, 241],
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
const polygonArea8b = [
  [250 - 95.5, 270],
  [250 - 90, 283],
  [250 - 75, 275],
  [250 - 71, 262],
  [250 - 80, 249],
  [250 - 93.5, 256.5],
];

const polygonArea9 = [
  [66, y: 328],
  [72, 280],
  [80, 288],
  [76.5, 315],
  [72, 325],
];
const polygonArea9b = [
  [250 - 66, 328],
  [250 - 72, 280],
  [250 - 80, 288],
  [250 - 76.5, 315],
  [250 - 72, 325],
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

const polygonArea11 = [
  [92.5, 297],
  [92.5, 285],
  [113.5, 321],
  [123, 335],
  [121, 387.5],
  [115, 387.5],
  [104.5, 350],
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

const polygonArea14 = [
  [63.5, 464.5],
  [71.5, 478.5],
  [71.5, 555.5],
  [60, 575.5],
  [58.3, 546],
  [52.25, 500],
];
const polygonArea14b = [
  [250 - 63.5, 464.5],
  [250 - 71.5, 478.5],
  [250 - 71.5, 555.5],
  [250 - 60, 575.5],
  [250 - 58.3, 546],
  [250 - 52.25, 500],
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
    <div className="image-container" 
    // onMouseMove={handleMouseMove}
    >
      <img src={frente} id="imagen0" alt="Imagen de fondo" />
      {/* <Polygon
        points={polygonArea1}
        pic={r01}
        style={{ display: "block" }}
      />
      <Polygon
        points={polygonArea2}
        pic={r02}
        style={{ display: "block" }}
      /> */}
      {/* <Polygon points={polygonArea1} onMouseMove={mouseLocation} style={{ display: "block" }} /> */}
      {/* <Polygon points={polygonArea1b} style={{ display: "block" }} />
      <Polygon points={polygonArea2} style={{ display: "block" }} />
      <Polygon points={polygonArea2b} style={{ display: "block" }} /> 
      <Polygon points={polygonArea3} style={{ display: "block" }} />
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
      <Polygon points={polygonArea15b} style={{ display: "block" }} />  */}
      <img src={r01} id="imagen1" alt="Imagen 1" style={{ display: "none" }} />
      <img src={r02} id="imagen2" alt="Imagen 2" style={{ display: "none" }} />
    </div>
  );
}

export default ImgFrente;
