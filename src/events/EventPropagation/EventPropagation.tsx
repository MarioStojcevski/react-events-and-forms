import styles from './EventPropagation.module.css';

const EventPropagation = () => {

  const handleContainerClick = () => {
    alert('container clicked');
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    alert('button clicked');

    event.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <button onClick={handleButtonClick} >child button</button>
    </div>
  );
};

export default EventPropagation;