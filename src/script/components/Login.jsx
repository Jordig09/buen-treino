import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Stack, Form, Container, Row } from "react-bootstrap";
import BackButton from "./BackButton";
import CtaButton from "./CtaButton";

import { auth } from "../../api/firebase";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import * as yup from "yup";
import { Formik } from "formik";

function Login({ action }) {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const formikRef = useRef();

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  function logIn() {
    formikRef.current.submitForm();
  }

  function handleCheckbox(event) {
    setRememberMe(event.target.checked);
  }

  return (
    <>
      <Container id="input">
        <BackButton action={() => action("home")} />
        <Stack gap={2} className="mt-5">
          <Formik
            innerRef={formikRef}
            validationSchema={schema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              try {
                const userCredential = await signInWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
                if (userCredential.user) navigate("/");
                if (rememberMe) {
                  // Si se debe recordar la sesión, establece la persistencia local
                  await setPersistence(auth, browserLocalPersistence);
                } else {
                  // Si no se debe recordar la sesión, establece la persistencia de sesión
                  await setPersistence(auth, browserSessionPersistence);
                }
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {({ handleChange, handleSubmit, touched, errors, values }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Recordarme"
                    onChange={handleCheckbox}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Stack>
        <Row className="">
          <Link
            style={{
              textAlign: "right",
            }}
            className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover"
            onClick={() => action("password")}
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
            action={logIn}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Login;
