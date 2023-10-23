/*84 - React Router
Add a new Route to the users/:username path that renders a ShowGithubUser
 component that receives the username as a path parameter and renders the 
 GithubUser component from the third exercise of Context by passing it the received username. */

import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/counter"> Counter </Link>
        <Link to="/users/:username"> Users </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/:name" element={<Welcome />} />
        <Route
          path="*"
          element={
            <div>
              <p> Page does not exist! </p>
              <Link to="/"> Go Home </Link>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
