import { Container, Stack, Image } from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";
import React from "react";
import postit3 from "../../img/Tuto/postit3.png";
import tape3 from "../../img/Tuto/tape3.png";

function Wellness({ handleOnClick, infoVisible }) {
  return (
    <>
      <Container id="input">
        <BackButton action={handleOnClick} />
      </Container>
      <Container id="action" className="mt-auto p-0">
        <Stack gap={2} className=" ">
          <CtaButton
            text="17 de Noviembre"
            navigate="day"
            type="primary"
            disabled={false}
            action={handleOnClick}
          />
          <CtaButton
            text="16 de Noviembre"
            navigate="day"
            type="secondary"
            disabled={false}
            action={handleOnClick}
          />
          <CtaButton
            text="15 de Noviembre"
            navigate="day"
            type="secondary"
            disabled={false}
            action={handleOnClick}
          />
          <CtaButton
            text="14 de Noviembre"
            navigate="day"
            type="secondary"
            disabled={false}
            action={handleOnClick}
          />
          <CtaButton
            text="13 de Noviembre"
            navigate="day"
            type="secondary"
            disabled={false}
            action={handleOnClick}
          />
        </Stack>
         {/* --- Imágenes tutorial --- */}
      <Image
          src={infoVisible ? postit3 : ""}
          className="align-item-right"
          style={{
            position: "absolute",
            bottom: "60px",
            right: "27.5px",
          }}
        />
         <Image
          src={infoVisible ? tape3 : ""}
          className="align-item-left"
          style={{
            position: "absolute",
            bottom: "240px",
            right: "10px",
          }}
        />
      </Container>
    </>
  );
}

export default Wellness;
