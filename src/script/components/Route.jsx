import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Day from "./Day";
import Wellness from "./Wellness";
import Train from "./Train";
import Home from "./Home";
import TrainingDay from "./TrainingDay";

function Route() {
  const [currentState, setCurrentState] = useState("home");

  const handleOnClick = (text) => {
    setCurrentState(text);
  };

  const [sliderTrain, setSliderTrain] = useState({
    intensidad: undefined,
  });

  function handleSliderTrainChange(key, value) {
    setSliderTrain((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  }

  // -- Sobrecarga --
  const [show, setShow] = useState();
  const [sobrecarga, setSobrecarga] = useState();
  function handleSobrecargaChange() {
    setShow()
  }

  function RenderContent() {
    switch (currentState) {
      case "home": {
        return <Home handleOnClick={handleOnClick} />;
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

export default Route;
