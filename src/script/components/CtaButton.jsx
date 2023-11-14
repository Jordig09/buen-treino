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
      className="w-100"
      onClick={() => (navigate ? action(navigate) : action())}
      style={
        type === "primary"
          ? {
              fontSize: "20px",
              fontWeight: "700",
              border: "0",
              backgroundColor: "rgb(60,253,155)",
              color: "white",
              fontFamily: 'Open Sans, sans-serif',
              boxShadow: "0px 0px 20px -2px rgb(33, 37, 41)",
            }
          : {
              fontSize: "20px",
              fontWeight: "700",
              border: "0",
              backgroundColor: "white",
              color: "rgb(60,253,155)",
              fontFamily: 'Nunito Sans, sans-serif',
              boxShadow: "0px 0px 20px -2px rgb(33, 37, 41)",
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
