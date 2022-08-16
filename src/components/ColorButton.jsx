import { useState } from "react";
import "./ColorButton.scss";

const ColorButton = () => {
  const [buttonColor, setButtonColor] = useState("red");

  const handleClick = () => {
    setButtonColor(buttonColor === "red" ? "blue" : "red");
  };

  return (
    <div className="color-button">
      <button
        className="red-btn"
        style={{ backgroundColor: buttonColor }}
        onClick={handleClick}
      >
        Change to {buttonColor === "red" ? "blue" : "red"}
      </button>
    </div>
  );
};

export default ColorButton;
