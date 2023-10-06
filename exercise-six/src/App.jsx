import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name={<strong> Charlie </strong>} age={24} />
    </div>
  );
}
export default App;

/* I pass a Jsx expression in a similar way. In the parent file, I give the prop name a JSX expression. The component file remains unchanged. */