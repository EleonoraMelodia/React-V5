export function Colors({ item }) {
  return (
    <>
      <ul>
        {item.map((color) => (
          <li key={color}> {color} </li>
        ))}
      </ul>
    </>
  );
}
