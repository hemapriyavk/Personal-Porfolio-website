import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Home from "./Components/Home";
import Header from './Components/Header';
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home showSection="about" />} />
          <Route path="/skills" element={<Home showSection="skills" />} />
          <Route path="/projects" element={<Home showSection="projects" />} />
          <Route path="/contact" element={<Home showSection="contact" />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
