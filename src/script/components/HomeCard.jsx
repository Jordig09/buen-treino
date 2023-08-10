import Card from "react-bootstrap/Card";

function HomeCard() {
  return (
    <Card
      style={{
        minHeight: "70vh",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px -2px rgb(33, 37, 41)",
      }}
    >
      <Card.Body className="d-flex flex-column justify-content-between"></Card.Body>
    </Card>
  );
}

export default HomeCard;
