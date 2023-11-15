import React from "react";
import { Stack, Form } from "react-bootstrap";
import CtaButton from "./CtaButton";

function Unirse({handleOnClick}) {
  return (
    <>
      
      <Stack gap={3} className=" justify-content-end">
      <Form className="d-flex ">
        <Form.Group className="mt-5 w-100" controlId="join group">
          <Form.Control
            type="text"
            placeholder="ID / Número de grupo"
            name="idGrupo"
            // value={values.lastName}
            // onChange={handleChange}
            // isValid={touched.lastName && !errors.lastName}
            // isInvalid={touched.lastName && !!errors.lastName}
            
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
