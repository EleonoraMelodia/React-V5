export function Container({ children, title }) {
  return (
    <>
      {title}
      <div style={{ border: "1px solid blue", backgroundColor: "beige" }}>
        {children}
      </div>
    </>
  );
}
//purtroppo attualmente non sono riuscita a installare correttamente Tailwind
