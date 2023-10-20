import React from "react";
import useControlledForm from "./useControlledForm";
import { Form } from "react-bootstrap";

const HookControlledForm = () => {
  const {
    password,
    username,
    handleUpdatePassword,
    handleUpdateUsername,
  } = useControlledForm();

    return (
        <form action="#">
            <input type="text" value={username} onChange={handleUpdateUsername} />
            <input type="password" value={password} onChange={handleUpdatePassword} />


      </form>
  );
};

export default HookControlledForm;
