import EventPropagation from "./events/EventPropagation/EventPropagation";
import PassingPropsToHandlers from "./events/PassingPropsToHandlers/PassingPropsToHandlers";
import SimpleButton from "./events/SimpleButton/SimpleButton";
import SimpleInput from "./events/SimpleInput/SimpleInput";
import HTMLForm from "./forms/HTMLForm/HTMLForm";
import ReactForm from "./forms/ReactForm/ReactForm";

const App = () => {

  const customClickHandler = (message: string) => {
    alert(`customClickHandler: ${message}`);
  };

  return (
    <div style={{ width: '600px', marginLeft: '25%' }}>
      {/* Event handling */}

      <h2>Events</h2>

      {/* <SimpleInput /> */}
      {/* <SimpleButton /> */}

      <div>
        {/* <PassingPropsToHandlers
          message="hello there"
          onFancyClick={customClickHandler}>test</PassingPropsToHandlers> */}
        {/* <PassingPropsToHandlers
          message="what's up">
          <div>
            <p>These are React.Node children being passed to our custom component</p>
            <input placeholder="We can add whatever we like" />
          </div>
        </PassingPropsToHandlers> */}
      </div>

      {/* <div>
        <EventPropagation />
      </div> */}

      {/* <hr />
      <h2>Forms</h2>
      <hr /> */}

      {/* React forms */}

      {/* <HTMLForm /> */}

      {/* <ReactForm /> */}
    </div>
  );
}

export default App;
