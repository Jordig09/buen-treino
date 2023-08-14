import { useState } from "react";
import { Form, Col } from "react-bootstrap";

function RangeExample({
  text = "text",
  type = "secondary",
  disabled = false,
  id = ""
}) {
  const [data, setData] = useState()
  ;
  return (
    <>
     
        <Form.Label className="row">
          <Col className="col-10 pb-4">{text}</Col>
          <Col className="col-2 text-end fs-4 fw-bold ">{data}</Col>
        </Form.Label>
      
      <Form.Range
        className="mb-5"
        min={0}
        max={10}
        step={1}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
}

export default RangeExample;
