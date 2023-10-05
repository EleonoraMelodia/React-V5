/*Write a function that receives a name argument and returns a h1 tag with the name variable appended to the "Hello, " string.*/ 


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


