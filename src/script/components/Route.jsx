import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Day from "./Day";
import Wellness from "./Wellness";
import Train from "./Train";
import Home from "./Home";
import TrainingDay from "./TrainingDay";
import bgTrainer from "../../img/Stock/Trainer2.png";

function Route({infoVisible}) {
  // -- Switch Casos --
  const [currentState, setCurrentState] = useState("home");

  const handleOnClick = (text) => {
    setCurrentState(text);
  };

  // -- Valores sliders --
  const [sliderValues, setSliderValues] = useState({
    sleep: "",
    dolor: "",
    fatiga: "",
    estres: "",
    sobrecarga: false,
    zona: "",
  });

  const [sliderTrain, setSliderTrain] = useState({
    intensidad: "",
  });

  function handleSliderTrainChange(key, value) {
    setSliderTrain((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  }

  function handleSliderChange(key, value) {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  }

  // -- Sobrecarga --
  const [show, setShow] = useState(false);

  function handleSobrecargaChange() {
    setSliderValues((prevValues) => ({
      ...prevValues,
      sobrecarga: !prevValues.sobrecarga,
    }));
  }

  function RenderContent() {
    switch (currentState) {
      case "home": {
        return <Home handleOnClick={handleOnClick} infoVisible={infoVisible}/>;
      }
      case "wellness": {
        return <Wellness handleOnClick={handleOnClick} />;
      }
      case "day": {
        return (
          <Day
            handleOnClick={handleOnClick}
            handleSobrecargaChange={handleSobrecargaChange}
            setShow={setShow}
            show={show}
            handleSliderChange={handleSliderChange}
            sliderValues={sliderValues}
          />
        );
      }
      case "entrenamiento": {
        return (
          <Train
            handleOnClick={handleOnClick}
            handleSobrecargaChange={handleSobrecargaChange}
          />
        );
      }
      case "trainingDay": {
        return (
          <TrainingDay
            handleOnClick={handleOnClick}
            handleSliderTrainChange={handleSliderTrainChange}
            sliderTrain={sliderTrain}
            handleSobrecargaChange={handleSobrecargaChange}
          />
        );
      }
      default: {
        setCurrentState();
      }
    }
  }
  const backgroundImageStyle =
    currentState === "day" || currentState === "trainingDay"
      ? "none"
      : `url(${bgTrainer})`; // Establece la imagen de fondo o "none" si es day o trainingDay

  return (
    <Card
      style={{
        minHeight: "70vh",
        borderRadius: "15px",
        border: "5px",
        boxShadow: "0px 0px 20px -2px rgb(33, 37, 41)",
        backgroundImage: backgroundImageStyle,
        backgroundSize: "cover", // Ajusta el tamaño de la imagen
        backgroundPosition: "right top ",
        backgroundRepeat: "none",
      }}
    >
      <Card.Body className="d-flex flex-column justify-content-between">
        {RenderContent()}
      </Card.Body >
    </Card>
  );
}

export default Route;
