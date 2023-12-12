const EventPropagation = () => {

  const handleContainerClick = () => {
    alert('container clicked');
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    alert('button clicked');

    event.stopPropagation();
  };

  return (
    <div onClick={handleContainerClick}>
      <button onClick={handleButtonClick} >child button</button>
    </div>
  );
};

export default EventPropagation;