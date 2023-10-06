import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name={"Charlie"} age={24} />
    </div>
  );
}
export default App;