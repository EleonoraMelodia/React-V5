import React, { useMemo } from "react";

const FilteredList = ({ objects }) => {
  const filteredList = useMemo(() => {
    return objects.filter((obj) => obj.age > 18);
  }, [objects]);

  return (
    <>
      {filteredList.map((item) => (
        <ul key={item.id}>
          <li> Id: {item.id} name: {item.name} age: {item.age} </li>
        </ul>
      ))}
    </>
  );
};

export default FilteredList;
