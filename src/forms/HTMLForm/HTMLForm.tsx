import styles from './HTMLForm.module.css';

const HTMLForm = () => {
  return (
    <form className={styles.form} onSubmit={(event: any) => {
      const inputField = event.target[0].value
      alert(`You entered: ${inputField}`);
      event.preventDefault();
    }}>
      <label className={styles.label}>
        Name:
        <input className={styles.input} type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
};

export default HTMLForm;