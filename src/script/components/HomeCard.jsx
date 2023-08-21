import React, { useState } from "react";
import { Container, Stack, Card, Form, Modal, Button } from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";
import SliderRange from "./SliderRange";

import ImgMusculos from "./ImgMusculos";

function HomeCard() {
  const [currentState, setCurrentState] = useState("home");
  const [sliderValues, setSliderValues] = useState({
    sleep: "",
    dolor: "",
    fatiga: "",
    estres: "",
    sobrecarga: false,
    zona: "",
  });

  const [sliderTrain, setSliderTrain] = useState({
    intensidad: undefined,
  });

  const [show, setShow] = useState(false);

  function Popup() {
    return (
      <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: 'Nunito Sans, sans-serif', fontWeight: '700'}}>¿Dónde sentís la sobrecarga?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <ImgMusculos />
        </Modal.Body>
        <Modal.Footer>
          <p>musculos seleccionados</p>
          <Button
            variant="primary"
            className="text-white"
            onClick={() => setShow(false)}
          >
            Aplicar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function handleSobrecargaChange() {
    setSliderValues((prevValues) => ({
      ...prevValues,
      sobrecarga: !prevValues.sobrecarga,
    }));
  }

  function handleSliderChange(key, value) {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  }

  function handleSliderTrainChange(key, value) {
    setSliderTrain((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  }

  function RenderContent() {
    switch (currentState) {
      case "home": {
        return (
          <>
            <Container id="input"></Container>
            <Container id="action" className="mt-auto p-0">
              <Stack gap={2} className=" ">
                <CtaButton
                  text="wellness"
                  navigate="wellness"
                  type="primary"
                  disabled={false}
                  action={handleOnClick}
                />
                <CtaButton
                  text="entrenamiento"
                  navigate="entrenamiento"
                  type="primary"
                  disabled={false}
                  action={handleOnClick}
                />
              </Stack>
            </Container>
          </>
        );
      }
      case "wellness": {
        return (
          <>
            <Container id="input">
              <BackButton action="home" />
            </Container>
            <Container id="action" className="mt-auto p-0">
              <Stack gap={2} className=" ">
                <CtaButton
                  text="2 de Mayo"
                  navigate="day"
                  type="primary"
                  disabled={false}
                  action={handleOnClick}
                />
                <CtaButton
                  text="1 de Mayo"
                  navigate="day"
                  type="secondary"
                  disabled={false}
                  action={handleOnClick}
                />
              </Stack>
            </Container>
          </>
        );
      }
      case "day": {
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
                  style={{fontFamily: 'Nunito Sans, sans-serif'}}
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

                <Popup />
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
      case "entrenamiento": {
        return (
          <>
            <Container id="input">
              <BackButton action="home" />
            </Container>
            <Container id="action" className="mt-auto p-0">
              <Stack gap={2} className=" ">
                <CtaButton
                  text="2 de Mayo"
                  navigate="trainingDay"
                  type="primary"
                  disabled={false}
                  action={handleOnClick}
                />
                <CtaButton
                  text="1 de Mayo"
                  navigate="trainingDay"
                  type="secondary"
                  disabled={false}
                  action={handleOnClick}
                />
              </Stack>
            </Container>
          </>
        );
      }
      case "trainingDay": {
        return (
          <>
            <Container id="input">
              <BackButton action="home" />
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
      default: {
        setCurrentState();
      }
    }
  }

  const handleOnClick = (text) => {
    setCurrentState(text);
  };

  return (
    <Card
      style={{
        minHeight: "70vh",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px -2px rgb(33, 37, 41)",
      }}
    >
      <Card.Body className="d-flex flex-column justify-content-between">
        {RenderContent()}
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
