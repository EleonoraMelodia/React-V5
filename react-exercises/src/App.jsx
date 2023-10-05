


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


/* it happens that the Jsx expression is correctly rendered anyway */ 