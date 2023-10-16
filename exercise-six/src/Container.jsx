import { useState } from "react";

export function Container({ children, title }) {
  const [collapsed, setCollapsed] = useState(null);
  function handleCollapseButton() {
    setCollapsed((c) => !c);
  }
    //con handle, inverto lo stato di collapsed tra true a false e viceversa. Quindi faccio si che questo parametro passi da true
    //a false, e vicevera, in modo che con l' && operator, io possa mostrare o nascondere il contenuto
  return (
    <>
      {title}
      {collapsed && (
        <div style={{ border: "1px solid blue", backgroundColor: "beige" }}> 
          {children}
        </div>
      )}
      <button onClick={handleCollapseButton}> Show more </button>
    </>
  );
}
//purtroppo attualmente non sono riuscita a installare correttamente Tailwind
