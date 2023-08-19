import { useState } from "react";
import { Form, Col } from "react-bootstrap";

function RangeExample({
  text = "text",
  type = "secondary",
  disabled = false,
  id = "",
}) {
  let sliderId = { id };

  const [data, setData] = useState();
  return (
    <>
      <Form.Label className="row">
        <Col className="col-9 pb-4">{text}</Col>
        <Col className="col-3 text-end fs-4 fw-bold ">{data}</Col>
      </Form.Label>

      <Form.Range
        className="mb-5"
        key={sliderId}
        min={0}
        max={10}
        step={1}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
}

export default RangeExample;
