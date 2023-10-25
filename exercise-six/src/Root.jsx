import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SWRConfig } from "swr";

const Root = () => {
const fetcher = url => fetch(url).then(response => response.json())

  return (
    <>
      <SWRConfig value={{fetcher}}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SWRConfig>
    </>
  );
};

export default Root;
