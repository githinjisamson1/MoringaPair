import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
//import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import StudentsDataGrid from "./pages/StudentsDataGrid";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact Us" element={<Contact />} />
        <Route path="/About Us" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route path="/students" element={<StudentsDataGrid />} />
       

      </Routes>
    </>
  );
};

export default App;

