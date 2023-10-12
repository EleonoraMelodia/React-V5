

function App() {
  function returnAName(name) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
  return (
    <div>
      {returnAName("Jimmy")}
    </div>
  );
}

export default App;
