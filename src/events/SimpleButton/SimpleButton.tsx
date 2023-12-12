import { useState } from "react";
import styles from "./SimpleButton.module.css";

const SimpleButton = () => {
  const CustomCompo = () => {
    return (
      <div>
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
    <>
      <button
        className={styles.button}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        onCopy={() => alert('Copied!')}
        onClick={handleButtonClick}>

        Click me
      </button>

      {isMouseEntered && <CustomCompo />}
    </>
  )
};

export default SimpleButton