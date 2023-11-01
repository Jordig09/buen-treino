import React from "react";
import { Container, Stack } from "react-bootstrap";
import SliderRange from "./SliderRange";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";

function TrainingDay({ handleOnClick , handleSliderTrainChange , sliderTrain}) {
  return (
    <>
      <Container id="input">
        <BackButton action={ handleOnClick } />
        <br></br>
        <br></br>
        <Stack gap={0}>
          <SliderRange
            text="¿Cuán intensa sentiste la sesión?"
            clave="intensidad"
            objeto={sliderTrain}
            handleSliderChange={handleSliderTrainChange}
          />
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
