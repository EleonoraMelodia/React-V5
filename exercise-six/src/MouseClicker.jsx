export function MouseClicker({ name }) {
  function handleClick(e) {
    console.log(e.target.name);
    }
    
    function handleImg(e) {
        console.log(e.target.src)
    }
  return (
    <button name={name} onClick={handleClick}>
      <img onClick={handleImg} name = "image" src="https://www.educolor.it/immagine-bottone-dl28074.jpg" width={45} height={30} />
    </button>
  );
}

/*yes the name is still printed in the console due to the event handler attached to the button, which however is triggered by the image */