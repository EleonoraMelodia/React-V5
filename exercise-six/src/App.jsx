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
import { LanguageContext } from "./LanguageContext";

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

  const [language, setLanguage] = useState("en");

  function handleLanguageSelection(language) {
    setLanguage(language);
  }

  return (
    <Container title={<h1> This is my awesome container </h1>}>
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

      
        <select
          onChange={() => handleLanguageSelection('IT')}
          name="language"
          id="language"
        >
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>

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
  );
}

export default App;


// Answer to the question: it happens, essentialy that the Clock component can't access anymore to the Context
// of the LanguageContext component, and so it access to the default value given to the hook "useContext".
