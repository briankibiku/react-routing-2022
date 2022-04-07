import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} exact />
          <Route path="/about" caseSensitive={false} element={<About />} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
        </Routes>
      </Router></>
  );
}

export default App;
