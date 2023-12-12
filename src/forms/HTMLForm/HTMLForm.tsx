const HTMLForm = () => {
  return (
    <form onSubmit={(event: any) => {
      const inputField = event.target[0].value
      alert(`You entered: ${inputField}`);
      event.preventDefault();
    }}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
};

export default HTMLForm;