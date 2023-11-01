import React from "react";
import CtaButton from "./CtaButton";
import { Container, Stack } from "react-bootstrap";

function Home({ handleOnClick }) {
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

export default Home;
