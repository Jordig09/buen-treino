import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ToggleTutorial({ tutorialText, toggleInfo }) {
  const [buttonText, setButtonText] = useState(tutorialText);

const handleToggle = () => {
  setButtonText(!buttonText);
  toggleInfo();
};
  return (
    <>
      <Form.Check
        className="red-switch"  // Añade la clase de estilo
        style={{
          fontFamily: "Nunito Sans, sans-serif",
        }}
        type="switch"
        
        id="switch-tutorial"
        checked={buttonText}  // Establece el estado "checked" según el estado buttonText
        onChange={handleToggle}  // Usa una función de manejo separada
        
      />
       <small className="p-0 m-0 ">{buttonText ? "Tutorial ON" : "Tutorial OFF"}</small>
    </>
  );
}

export default ToggleTutorial;
