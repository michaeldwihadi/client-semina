import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { listen } from "./redux/listener";

import { AppRoutes } from "./routes";
import "./App.css";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
