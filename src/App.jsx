import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="p-10">
      <nav className="mb-10 flex gap-5 border-b pb-5">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-500 hover:underline">
          About
        </Link>
        <Link to="/contact" className="text-blue-500 hover:underline">
          Contact
        </Link>
      </nav>

      <div className="bg-white p-5 shadow-lg rounded-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ডাইনামিক রুটটি যোগ করুন: */}
          <Route path="/user/:username" element={<UserProfile />} />

          {/* 404 file not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
