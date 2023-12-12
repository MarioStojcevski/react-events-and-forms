import EventPropagation from "./events/EventPropagation/EventPropagation";
import PassingPropsToHandlers from "./events/PassingPropsToHandlers/PassingPropsToHandlers";
import SimpleButton from "./events/SimpleButton/SimpleButton";
import SimpleInput from "./events/SimpleInput/SimpleInput";

const App = () => {

  const customClickHandler = (message: string) => {
    alert(`customClickHandler: ${message}`);
  };

  return (
    <>
      <SimpleInput />
      <SimpleButton />

      <div>
        <PassingPropsToHandlers
          message="hello there"
          onFancyClick={customClickHandler}>test</PassingPropsToHandlers>
        <PassingPropsToHandlers
          message="what's up">
          <div>
            <p>These are React.Node children being passed to our custom component</p>
            <input placeholder="We can add whatever we like" />
          </div>
        </PassingPropsToHandlers>
      </div>

      <div>
        <EventPropagation />
      </div>
    </>
  )
}

export default App;
