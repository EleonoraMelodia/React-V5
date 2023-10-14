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
import { FocusableInput } from "./FocusableInput";
import { Colors } from "./Colors";
import { ToDoList } from "./ToDoList";
import { Container } from "./Container";

function App() {
  function handleButtonClick() {
    const time = new Date();
    alert(`The current time is: ${time.toLocaleTimeString()}`);
  }
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
  }
  function decrementCounter() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }

  function handleLogin(data) {
    console.log("The user data are: ", data);
  }

  return (
    <Container>
      <Hello />
      <Message />
      <Welcome age={35} />
      <AlertClock buttonClicked={handleButtonClick} />
      <Counter
        counter={counter}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
        reset={reset}
      />
      <Clock />
      <MouseClicker name="one" />
      <MultiButton nameOne="one" nameTwo="two" nameThree="three" />
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <FocusableInput />
      <Colors
        items={[
          {
            id: 1,
            name: "Kyle",
          },
          {
            id: 2,
            name: "Charlotte",
          },
          {
            id: 3,
            name: "Marnie",
          },
          {
            id: 4,
            name: "Gaz",
          },
        ]}
      />
      <ToDoList />
    </Container>
  )
}

export default App;
