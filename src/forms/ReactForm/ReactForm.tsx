import { useState } from "react";
import styles from './ReactForm.module.css';

const ReactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [employed, setEmployed] = useState(false);
  const [fruit, setFruit] = useState('banana');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      age,
      employed,
      fruit
    };

    console.log(formData);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            className={styles.input}
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={age}
            onChange={e => setAge(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <input
            id="employed"
            name="employed"
            type="checkbox"
            checked={employed}
            onChange={e => setEmployed(e.target.checked)}
          />
        </div>

        <div>
          <label>
            Pick a fruit:
            <select
              name="selectedFruit"
              onChange={e => setFruit(e.target.value)}
              defaultValue={fruit}>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactForm;