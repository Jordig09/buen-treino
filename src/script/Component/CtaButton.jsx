import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function CtaButton({
  text = "text",
  navigate = "",
  type = "secondary",
  action,
  disabled = false,
}) {
  return (
    <Button
      variant={type}
      onClick={() => (navigate ? action(navigate) : action())}
      style={
        type === "primary"
          ? {
              fontSize: "20px",
              fontWeight: "700",
              border: "0",
              backgroundColor: "rgb(60,253,155)",
              color: "white",
            }
          : {
              fontSize: "20px",
              fontWeight: "700",
              border: "3px solid grey",
              backgroundColor: "white",
              color: "rgb(60,253,155)",
            }
      }
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default CtaButton;

CtaButton.propTypes = {
  text: PropTypes.string,
  navigate: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  action: PropTypes.func,
};
