import React from "react";
import { Container, Stack } from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";

function Train({ handleOnClick }) {
  return(<>
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
  </>);
}

export default Train;
