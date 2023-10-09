import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { useState } from "react";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

function App() {
  function handleButtonClick() {
    const time = new Date();
    alert(`The current time is: ${time.toLocaleTimeString()}`);
  }
   const [counter, setCounter] = useState(0)
    function incrementCounter () {
        setCounter (counter +1 )
    }
    function decrementCounter() {
        setCounter (counter - 1 )
    }
    function reset() {
        setCounter (0)
    }

  return (
    <div>
      <Hello />
      <Message />
      <Welcome age={35} />
      <AlertClock buttonClicked={handleButtonClick} />
      <Counter counter={counter} incrementCounter={incrementCounter} decrementCounter={decrementCounter}  reset = {reset} />
      <Clock />
      <MouseClicker name="one" />
      <MultiButton nameOne="one" nameTwo="two" nameThree="three" />
      <InteractiveWelcome />
      <Login/>
    </div>
  );
}

export default App;