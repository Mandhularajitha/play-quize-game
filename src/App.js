

import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Components/LoginSignup/Login";
import { Signup } from "./Components/LoginSignup/Signup";
import { RequireAuth } from "./RequireAuth";
import { Rules } from "./Components/rulespage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RequireAuth><MainPage /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rulespage" element={<Rules />} />

      </Routes>
    </div>
  );
}


export default App;
