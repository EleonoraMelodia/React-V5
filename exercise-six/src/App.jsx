import { Hello } from "./Hello"
import { Message } from "./Message"

function App() {
 
  return (
    <div>
      <Hello />
      <Message/>
    </div>
  )
}
export default App


/* Yes, I could render the Message component directly in the App.jsx. This would allow me to reuse the component in multiple parts of the application */