import { useState } from "react";
import styles from "./SimpleInput.module.css";

const SimpleInput = () => {
  const [message, setMessage] = useState('');

  return (
    <div className={styles.simpleContainer}>
      <input value={message} onChange={(event) => setMessage(event.target.value)} />
      <p>{message}</p>
    </div>
  )
};

export default SimpleInput;
