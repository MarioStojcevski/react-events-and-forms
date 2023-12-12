import { useState } from "react";
import styles from "./SimpleExample.module.css";

const SimpleExample = () => {
  const [message, setMessage] = useState('');

  return (
    <div className={styles.simpleContainer}>
      <input value={message} onChange={(event) => setMessage(event.target.value)} />
      <p>{message}</p>
    </div>
  )
};

export default SimpleExample;
