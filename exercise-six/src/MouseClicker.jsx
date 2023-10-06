export function MouseClicker({ name }) {
  function handleClick(e) {
    console.log(e.currentTarget.name);
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

/* I can do this using the CurrentTarget event property, which allows me to detect the element the event handler is attached to */