import { Hello } from "./Hello"
import { Message } from "./Message"

function App() {
 
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <Message/>
    </div>
  )
}
export default App

/* the component will be rendered as many times as I reused it in App.jsx */

