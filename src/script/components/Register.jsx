import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Form, Container } from "react-bootstrap";
import BackButton from "./BackButton";
import CtaButton from "./CtaButton";

import * as yup from "yup";
import { Formik } from "formik";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../api/firebase";

function Register({ action }) {
  const navigate = useNavigate();

  const formikRef = useRef();

  const schema = yup.object().shape({
    firstName: yup.string().nullable().required(),
    lastName: yup.string().required(),
    born: yup.date().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Las contraseñas deben ser iguales."),
  });

  function signUp() {
    formikRef.current.submitForm();
  }

  return (
    <>
      <Container id="input">
        <BackButton action={() => action("home")} />
        <Formik
          innerRef={formikRef}
          validationSchema={schema}
          initialValues={{
            firstName: "",
            lastName: "",
            born: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async (values) => {
            try {
              const formElement = document.querySelector(".register-form");
              const formData = new FormData(formElement);
              const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              );
              await sendEmailVerification(userCredential.user);
              formData.append("id", auth.currentUser.uid);
              formData.append("sheet", "USUARIO");
              fetch(
                "https://script.google.com/macros/s/AKfycbxpkciTJUmwwUlqCzudHt4qrd8kqH71L6VV4o746ofZ_elWahsU8tEaN5PTdpJy50bN/exec",
                { method: "POST", body: formData }
              );
              navigate("/");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {({ handleChange, handleSubmit, touched, errors, values }) => (
            <Form noValidate onSubmit={handleSubmit} className="register-form">
              <Form.Group className="my-3" controlId="register-control01">
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-3" controlId="register-control02">
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={touched.lastName && !!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-3" controlId="register-control03">
                <Form.Control
                  type="date"
                  placeholder="Fecha de nacimiento"
                  name="born"
                  value={values.born}
                  onChange={handleChange}
                  isValid={touched.born && !errors.born}
                  isInvalid={touched.born && !!errors.born}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.born}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-3" controlId="register-control04">
                <Form.Control
                  type="email"
                  placeholder="Correo Electrónico"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-3" controlId="register-control05">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-3" controlId="register-control06">
                <Form.Control
                  type="password"
                  placeholder="Confirmar Contraseña"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isValid={touched.confirmPassword && !errors.confirmPassword}
                  isInvalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </Container>
      <Container id="action" className="mt-auto p-0">
        <Stack gap={2} className=" ">
          <CtaButton
            text="registrarme"
            navigate="home"
            type="primary"
            disabled={false}
            action={signUp}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Register;
