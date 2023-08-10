import { Stack, Form } from "react-bootstrap";
import CtaButton from "./CtaButton";

function Password() {
  return (
    <Form>
      <Form.Group className="mt-5" controlId="">
        <Stack gap={3} className=" ">
          <Form.Control
            type="email"
            placeholder="Correo Electrónico"
            name="mail"
          />
          <CtaButton
            text="Enviar"
            type="secondary"
            name="enviar"
            disabled={true}
          />
          <Form.Control type="text" placeholder="Codigo" name="codigo" />
          <CtaButton
            text="Validar"
            type="secondary"
            name="validar"
            disabled={true}
          />
          <Form.Control
            type="password"
            placeholder="Nueva Contraseña"
            name="contraseña"
          />
          <Form.Control type="password" placeholder="Confirmar Contraseña" />
        </Stack>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword"></Form.Group>
    </Form>
  );
}

export default Password;
