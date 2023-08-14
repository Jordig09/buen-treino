import { useState } from "react";
import { Container, Stack, Card } from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";
import RangoNumerico from "./RangoNumerico";

function HomeCard() {
  const [currentState, setCurrentState] = useState("home");
  const [sliderValues, setSliderValues] = useState({
    sueño: null,
    dolor: null,
    fatiga: null,
    estres: null,
  });

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
            <Container id="input"></Container>
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
              <BackButton action= "home" />
              <br></br>
              <br></br>
              <Stack gap={0} className=" ">
                <RangoNumerico
                  text="¿Cómo dormiste anoche?"
                  id="sueño"
                  onChange={(value) =>
                    setSliderValues({ ...sliderValues, sueño: value })
                  }
                />
                <RangoNumerico
                  text="¿Cuánto te duelen los músculos?"
                  id="dolor"
                  onChange={(value) =>
                    setSliderValues({ ...sliderValues, dolor: value })
                  }
                />
                <RangoNumerico
                  text="¿Cuán fatigado estás?"
                  id="fatiga"
                  onChange={(value) =>
                    setSliderValues({ ...sliderValues, fatiga: value })
                  }
                />
                <RangoNumerico
                  text="¿Cuán estresado estás?"
                  id="estres"
                  onChange={(value) =>
                    setSliderValues({ ...sliderValues, estres: value })
                  }
                />
              </Stack>
            </Container>
            <Container id="action" className="mt-auto p-0">
              <Stack gap={2} className=" ">
                <CtaButton
                  text="Enviar"
                  navigate="home"
                  type="primary"
                  disabled={
                    sliderValues.sueño === null ||
                    sliderValues.dolor === null ||
                    sliderValues.fatiga === null ||
                    sliderValues.estres === null
                  }
                  action={handleOnClick}
                />
              </Stack>
            </Container>
            {console.log(sliderValues)}
          </>
        );
      }
      case "entrenamiento": {
        return (
          <>
            <Container id="input"></Container>
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
      default: {
        setCurrentState("home");
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
