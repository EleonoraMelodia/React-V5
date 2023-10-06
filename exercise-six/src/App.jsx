import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="Jerry" />
    </div>
  );
}
export default App;
