import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import LoginCard from "../../components/LoginCard";
import Footer from "../../components/Footer";

function Login() {
  
  
  return (
    <>
      <NavBar login={false} />
      <Container className="my-4">
        <Row className="justify-content-end">
          <Col className="text-white d-flex align-item-center d-none d-lg-block">
            <h1 style={{ fontSize: "70px"}}>BuenTreino</h1>
          </Col>
          <Col sm md="6" lg="4" className="">
            <LoginCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
