import { useState } from "react";
import "./ColorButton.scss";

const ColorButton = () => {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setButtonColor(buttonColor === "red" ? "blue" : "red");
  };

  return (
    <div className="color-button">
      <button
        className="red-btn"
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={handleClick}
        disabled={disabled}
      >
        Change to {buttonColor === "red" ? "blue" : "red"}
      </button>
      <input
        type="checkbox"
        id="button-disable-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(event) => {
          setDisabled(event.target.checked);
        }}
      />
      <label htmlFor="button-disable-checkbox">Disable button</label>
    </div>
  );
};

export default ColorButton;
