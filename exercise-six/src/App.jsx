/*84 - React Router
Add a new Route to the users/:username path that renders a ShowGithubUser
 component that receives the username as a path parameter and renders the 
 GithubUser component from the third exercise of Context by passing it the received username. */

import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser/>} />
        <Route path="/:name" element={<Welcome />} />
      </Routes>

    </>

  );
};

export default App;
