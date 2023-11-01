import React, { useState } from "react";
import { Container, Stack, Form } from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";
import SliderRange from "./SliderRange";
import PopUp from "./PopUp";

function Day({ handleOnClick, handleSobrecargaChange, setShow, show , handleSliderChange,sliderValues }) {
  

  return (
    <>
      <Container id="input">
        <BackButton action="home" />
        <Stack className="mt-2" gap={0}>
          <SliderRange
            text="¿Cómo dormiste anoche?"
            clave="sleep"
            objeto={sliderValues}
            handleSliderChange={handleSliderChange}
          />
          <SliderRange
            text="¿Cuánto te duelen los músculos?"
            clave="dolor"
            objeto={sliderValues}
            handleSliderChange={handleSliderChange}
          />
          <SliderRange
            text="¿Cuán fatigado estás?"
            clave="fatiga"
            objeto={sliderValues}
            handleSliderChange={handleSliderChange}
          />
          <SliderRange
            text="¿Cuán estresado estás?"
            clave="estres"
            objeto={sliderValues}
            handleSliderChange={handleSliderChange}
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
            disabled={
              sliderValues.sleep === "" ||
              sliderValues.dolor === "" ||
              sliderValues.fatiga === "" ||
              sliderValues.estres === ""
            }
            action={handleOnClick}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Day;
