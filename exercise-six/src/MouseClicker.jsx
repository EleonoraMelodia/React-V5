export function MouseClicker({ name }) {
  function handleClick(e) {
    console.log(e.target.name);
  }
  return (
    <button name={name} onClick={handleClick}>
      <img name = "image"  width={30} height={30} />
    </button>
  );
}
