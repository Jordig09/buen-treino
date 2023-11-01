import React, { useEffect, useRef, useState } from "react";

const Polygon = ({ points, pic }) => {
  const canvasRef = useRef(null);
  const [show, setShow] = useState("none");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "transparent";
    context.strokeStyle = "red";

    context.beginPath();
    context.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      context.lineTo(points[i].x, points[i].y);
    }
    context.closePath();
    context.stroke();
  }, [points]);

  
    const [showImage, setShowImage] = useState(false);
  
    const handleMouseEnter = () => {
      setShowImage(true);
    };
  
    const handleMouseLeave = () => {
      setShowImage(false);
    };
  

  return (
    <>
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseEnter} // Puedes cambiarlo a onClick si prefieres que la imagen permanezca al hacer clic
      style={{
        position: "absolute",
        cursor: "pointer",
      }}
    >
      {showImage && <img src={pic} alt="Imagen Mostrada" />}
      <svg width="100%" height="100%">
        <polygon points={points} fill="transparent" stroke="none" />
      </svg>
    </div>

      <canvas
        ref={canvasRef}
        width={250}
        height={650}
        style={{ position: "absolute" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img src={pic} display={show} style={{ position: "absolute" }} />
    </>
  );
};

export default Polygon;
