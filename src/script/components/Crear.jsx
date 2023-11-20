import React, { useState } from "react";
import { Stack, Container } from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";
import { IoMdClipboard } from "react-icons/io";

function Crear({ handleOnClick }) {
  const [randomNum, setRandomNum] = useState(() => generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000);
  }

  return (
    <>
      <Container id="input">
        <BackButton action={handleOnClick} />
      </Container>
      <Stack gap={3} className="justify-content-end">
        <div
          className="d-flex"
          style={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <p className="p-0 m-0">Id Nuevo Grupo :</p>
          <p className="p-0 m-0">#{randomNum}</p>
          <IoMdClipboard className="p-0 m-0" />
        </div>
        <CtaButton
          text="Crear Grupo"
          navigate="home"
          type="primary"
          action={handleOnClick}
        />
      </Stack>
    </>
  );
}

export default Crear;
