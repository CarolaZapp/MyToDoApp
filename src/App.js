import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Login from "./components/Login";
import MembersOnly from "./components/MembersOnly";
import VierNullVier from "./components/VierNullVier";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/MyToDoApp" element={<Main />} />
        <Route path="/MyToDoApp/main" element={<Main />} />
        <Route path="/MyToDoApp/about" element={<About />} />
        <Route path="/MyToDoApp/login" element={<Login />} />
        <Route path="/MyToDoApp/membersOnly" element={<MembersOnly />} />
        <Route path="*" element={<VierNullVier />} />
      </Routes>
    </div>
  );
}

export default App;
