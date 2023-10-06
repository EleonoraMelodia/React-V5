import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name={<strong> Charlie </strong>} age={34}/>
    </div>
  );
}
export default App;
