import { useRef, useState } from "react";

export function Form() {
  const [data, setData] = useState();
    const inputRef = useRef()
    
    
  function handleSubmit(e) {
    e.preventDefault();
      alert(data);
    inputRef.current.value = " "
  }
  function handleInput(event) {
    setData(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="#">
        <input ref={inputRef} onChange={handleInput} type="text" />
        <button> Submit </button>
      </form>
    </>
  );
}
