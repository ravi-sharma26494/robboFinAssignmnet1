import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
