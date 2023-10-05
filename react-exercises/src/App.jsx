


function returnAName(name) {
  return name
}

function App() {
  return (
    <div>
      <h1> Hello {returnAName("Jimmy")}</h1>
    </div>
  );
}

export default App;


/* it happens that on the screen the variable name is not rendered, only the title containing the string "Hello" is rendered*/ 