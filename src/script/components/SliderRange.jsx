import { Form, Col } from "react-bootstrap";

function SliderRange({ text, clave, objeto, handleSliderChange }) {
  return (
    <>
      <Form.Label className="row">
        <Col className="col-9 pb-2"> {text}</Col>
        <Col className="col-3 text-end fs-5 fw-bold ">{objeto[clave]}</Col>
      </Form.Label>
      <Form.Range
        className="mb-4"
        min={0}
        max={10}
        step={1}
        label={{ clave }}
        value={objeto[clave]}
        onChange={(e) => handleSliderChange(clave, e.target.value)}
      />
    </>
  );
}
export default SliderRange;
