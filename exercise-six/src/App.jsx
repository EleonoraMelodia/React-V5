import { AlertClock } from "./AlertClock";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name={<strong>John</strong>} age={4} />
 <AlertClock/>
    </div>
  );
}
export default App;
