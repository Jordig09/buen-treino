import React from "react";
import { Stack, Form, Container } from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";

function Unirse({ handleOnClick }) {
  return (
    <>
      <Container id="input">
        <BackButton action={handleOnClick} />
      </Container>
      <Stack gap={3} className=" justify-content-end">
        <Form className="d-flex ">
          <Form.Group className="mt-5 w-100" controlId="join group">
            <Form.Control
              type="text"
              placeholder="ID / Número de grupo"
              name="idGrupo"
            />
          </Form.Group>
        </Form>
        <CtaButton
          text="Unirse"
          navigate="home"
          type="primary"
          action={handleOnClick}
        />
      </Stack>
    </>
  );
}

export default Unirse;
