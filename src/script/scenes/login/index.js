import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import NavBar from "../../components/NavBar";
import LoginCard from "../../components/LoginCard";
import Footer from "../../components/Footer";
import SideLog from "../../components/SideLog";
import gradientbg from "../../../img/Gradient/101PaloAlto.png";

function Login() {
  const isMdScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 });
  const isXsScreen = useMediaQuery({ maxWidth: 576 });
  const sideLogBg = isXsScreen ? "350px" : isMdScreen ? "600px" : "900px";
  return (
    <>
      <NavBar login={false} />
      <Container className="my-4 w-100">
        <div
          style={{
            minHeight: "70vh",
            width: sideLogBg,
            borderRadius: " 15px 0px 0px 15px ",
            position: "absolute",
            backgroundColor: "rgb(50 50 50)",
            backgroundImage: `url(${gradientbg})`,
            backgroundSize: "cover",
            backgroundPosition: "right top ",
            backgroundRepeat: "none",
            zIndex: "1",
          }}
          className="d-none d-md-block"
        ></div>
        <Row className=" justify-content-end m-0">
          <Col
            sm={4}
            md={6}
            lg={7}
            style={{
              zIndex: "2",
            }}
            className="text-white px-3 py-auto align-item-center d-none d-md-block"
          >
            <SideLog />
          </Col>
          <Col
            xs={11}
            sm={8}
            md={6}
            lg={5}
            style={{ zIndex: "2" }}
            className="mx-auto p-0"
          >
            <LoginCard
              style={{
                borderRadius: "0px 15px 15px 0px",
              }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
