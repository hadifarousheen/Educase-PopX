import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";
import Register from "./Components/Register";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
