/*Create a custom hook that keeps track of the 
state of a controlled form with the username and password inputs,
and returns the current value of the inputs as well as an event handler to update either input.
*/

import { useState } from "react";

const useControlledForm = (initialValue = " " ) => {
  const [value, setValue] = useState(initialValue);

  const handleUpdateInput = (event) => {
    setValue(event.target.value);
  };

  return value, handleUpdateInput;
};

export const HookForm = ({initialValue= " " }) => {
    const { value, handleUpdateInput } = useControlledForm(initialValue);

    return (
        <form action="#">
            <input type="text" />
            
            <input type="password"/>

        </form>
    )
} 
