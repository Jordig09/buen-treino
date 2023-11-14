import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Stack, Card } from "react-bootstrap";
import CtaButton from "./CtaButton";
import Login from "./Login";
import BackButton from "./BackButton";
import Register from "./Register";
import Password from "./Password";
import bgTrainer from "../../img/Stock/trainerMan2.png";

function LoginCard() {
  const [currentState, setCurrentState] = useState("home");

  const handleOnClick = (text) => {
    setCurrentState(text);
  };

  function RenderContent() {
    switch (currentState) {
      case "home": {
        return (
          <>
            <Container id="input"></Container>
            <Container id="action" className="mt-auto p-0">
              <Stack gap={2} className=" ">
                <CtaButton
                  text="Login"
                  navigate="login"
                  type="primary"
                  disabled={false}
                  action={handleOnClick}
                />
                <CtaButton
                  type=""
                  text="registrate"
                  navigate="register"
                  disabled={false}
                  action={handleOnClick}
                />
              </Stack>
            </Container>
          </>
        );
      }
      case "login": {
        return (
          <>
            <Container id="input">
              <BackButton action={handleOnClick} />
              <Login />
              <Row className="">
                <Link
                  style={{
                    textAlign: "right",
                  }}
                  className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover"
                  onClick={() => setCurrentState("password")}
                >
                  Olvidé la contraseña
                </Link>
              </Row>
            </Container>
            <Container id="action" className="mt-auto p-0">
              <Stack gap={2} className=" ">
                <CtaButton
                  text="entrar"
                  navigate="home"
                  type="primary"
                  disabled={false}
                  action={handleOnClick}
                />
              </Stack>
            </Container>
          </>
        );
      }

      case "register": {
        return <Register action={handleOnClick} />;
      }
      case "password": {
        return (
          <>
            <Container id="input">
              <BackButton action={handleOnClick} />
              <Password />
            </Container>
            <Container id="action" className="mt-auto p-0">
              <Stack gap={2} className=" ">
                <CtaButton
                  text="entrar"
                  navigate="home"
                  type="primary"
                  disabled={true}
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

  const backgroundImageStyle =
  currentState === "home"
    ? `url(${bgTrainer})`
    : "none";

  return (
    <Card
      style={{
        minHeight: "70vh",
        borderRadius: "15px",
        border: "5px",
        boxShadow: "0px 0px 10px -2px rgb(33, 37, 41)",
        backgroundImage: backgroundImageStyle,
        backgroundSize: "cover",
        backgroundPosition: "right top ",
        backgroundRepeat: "none",
      }}
    >
      <Card.Body className="d-flex flex-column justify-content-between">
        {RenderContent()}
      </Card.Body>
    </Card>
  );
}

export default LoginCard;
