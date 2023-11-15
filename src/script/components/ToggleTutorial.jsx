import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ToggleTutorial({ tutorialText, toggleInfo }) {
  const [buttonText, setButtonText] = useState(tutorialText);

  return (
    <>
      <Form.Check
        className="red-switch"  // Añade la clase de estilo
        style={{
          fontFamily: "Nunito Sans, sans-serif",
        }}
        type="switch"

        id="switch-tutorial"
        onClick={toggleInfo}
      />
      <p className="p-0 m-0">{buttonText}</p>
    </>
  );
}

export default ToggleTutorial;
