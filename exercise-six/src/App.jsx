/*Create an App component that wraps a Routes
 component and add a single Route to the / path that
 renders the Welcome component from the 
 first exercise of Styling Component, passing it a name prop.
  Render the App component within a BrowserRouter component. */

import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/counter" element={< Counter/>} />
      </Routes>
    </>
  );
};

export default App;
