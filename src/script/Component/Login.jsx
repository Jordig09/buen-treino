import { Stack, Form } from "react-bootstrap";

function Login() {
  return (
    <Stack gap={2} className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Form>
    </Stack>
  );
}

export default Login;
