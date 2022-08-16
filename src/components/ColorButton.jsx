import { useState, useRef } from "react";
import "./ColorButton.scss";

const ColorButton = () => {
  const colorButtonElem = useRef(null);

  const [buttonColor, setButtonColor] = useState("red");

  const handleClick = () => {
    setButtonColor(buttonColor === "red" ? "blue" : "red");
  };

  const handleCheckbox = () => {
    colorButtonElem.current.disabled = !colorButtonElem.current.disabled;
  };

  return (
    <div className="color-button">
      <button
        className="red-btn"
        style={{ backgroundColor: buttonColor }}
        onClick={handleClick}
        ref={colorButtonElem}
      >
        Change to {buttonColor === "red" ? "blue" : "red"}
      </button>
      <input type="checkbox" onChange={handleCheckbox} />
    </div>
  );
};

export default ColorButton;
