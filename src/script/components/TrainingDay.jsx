import React from "react";
import { Container, Stack, Form } from "react-bootstrap";
import SliderRange from "./SliderRange";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";
import PopUp from "./PopUp";

function TrainingDay({
  handleOnClick,
  handleSliderTrainChange,
  handleSobrecargaChange,
  setShow,
  show,
  sliderTrain,
  sliderValues,
}) {
  return (
    <>
      <Container id="input">
        <BackButton action={handleOnClick} />
        <br></br>
        <br></br>
        <Stack gap={0}>
          <SliderRange
            text="¿Cuán intensa sentiste la sesión?"
            clave="intensidad"
            objeto={sliderTrain}
            handleSliderChange={handleSliderTrainChange}
          />
          <Form.Check
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
            type="switch"
            id="custom-switch"
            label="¿sentís sobrecarga muscular?"
            value={""}
            checked={sliderValues.sobrecarga}
            onChange={handleSobrecargaChange}
            onClick={() =>
              !sliderValues.sobrecarga ? setShow(true) : setShow(false)
            }
          />
          <br />

          <PopUp show={show} setShow={setShow} />
        </Stack>
      </Container>
      <Container id="action" className="mt-auto p-0">
        <Stack gap={2} className=" ">
          <CtaButton
            text="Enviar"
            navigate="home"
            type="primary"
            disabled={sliderTrain.intensidad === undefined}
            action={handleOnClick}
          />
        </Stack>
      </Container>
    </>
  );
}

export default TrainingDay;
