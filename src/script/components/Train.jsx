import React from "react";
import { Container, Stack , Image} from "react-bootstrap";
import CtaButton from "./CtaButton";
import BackButton from "./BackButton";
import postit2 from "../../img/Tuto/postit2.png";
import tape3 from "../../img/Tuto/tape3.png";

function Train({ handleOnClick, infoVisible }) {
  return(<>
    <Container id="input">
      <BackButton action={ handleOnClick } />
    </Container>
    <Container id="action" className="mt-auto p-0">
      <Stack gap={2} className=" ">
        <CtaButton
          text="17 de Noviembre"
          navigate="trainingDay"
          type="primary"
          disabled={false}
          action={handleOnClick}
        />
        <CtaButton
          text="15 de Noviembre"
          navigate="trainingDay"
          type="secondary"
          disabled={false}
          action={handleOnClick}
        />
        <CtaButton
          text="13 de Noviembre"
          navigate="trainingDay"
          type="secondary"
          disabled={false}
          action={handleOnClick}
        />
      </Stack>
      {/* --- Imágenes tutorial --- */}
      <Image
          src={infoVisible ? postit2 : ""}
          className="align-item-right"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "27.5px",
          }}
        />
         <Image
          src={infoVisible ? tape3 : ""}
          className="align-item-left"
          style={{
            position: "absolute",
            bottom: "140px",
            right: "10px",
          }}
        />
    </Container>
  </>);
}

export default Train;
