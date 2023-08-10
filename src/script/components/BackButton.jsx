import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";

function BackButton({ action }) {
  const [mouseEntered, setMouseEntered] = useState(false);

  return (
    <IoChevronBackCircleOutline
      cursor={mouseEntered ? "pointer" : "default"}
      size="80"
      color="lightgrey"
      opacity={mouseEntered ? "50%" : "100%"}
      onClick={() => action("home")}
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
    />
  );
}

export default BackButton;
