// import { MenuItems } from "./MenuItems";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
// import Blog from './components/Blog';


function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />
    

      <Routes>
      <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
            </Route>
          <Route path="/service" element={<Service/>}>
          </Route>
          {/* <Route path="/blog" element={<Blog/>}>
          </Route> */}
          <Route path="/contact" element={<Contact />}>
          </Route>
          
        </Routes>
    </div>
  </Router>
  );
}

export default App;
