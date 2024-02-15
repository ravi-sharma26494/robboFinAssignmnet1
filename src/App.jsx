import { Route, Routes } from "react-router-dom";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainSection from "./components/MainSection/MainSection";
import Layout from "./pages/layout";

function App() {
  return (
    // <div className="layout">
    //   <LeftSidebar />
    //   <MainSection />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
