import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import About from './Components/About';
import Write from './Components/pages/Write';
import Settings from './Components/pages/Settings';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import Singlepost from './Components/pages/Singlepost';
function App() {
  const user = true;
    return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/settings" element={user?<Settings/>:<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/write" element={user?<Write/>:<Register />}></Route>
        <Route path="/post/:postId" element={<Singlepost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
