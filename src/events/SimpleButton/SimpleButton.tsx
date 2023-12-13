import { useState } from "react";
import styles from "./SimpleButton.module.css";

const SimpleButton = () => {
  const CustomCompo = () => {
    return (
      <div className={styles.customCompo}>
        <p>Hi there!</p>
      </div>
    );
  }

  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleButtonClick = () => {
    alert('Button clicked!');
  }

  const handleButtonMouseEnter = () => {
    setIsMouseEntered(true);
  }

  const handleButtonMouseLeave = () => {
    setIsMouseEntered(false);
  }

  return (
    <div>
      <button
        className={styles.button}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        onClick={handleButtonClick}>
        Click me
      </button>

      <p onCopy={() => alert('Copied!')}>Copy me</p>
      {isMouseEntered && <CustomCompo />}
    </div>
  )
};

export default SimpleButton