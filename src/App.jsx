import './App.scss';
import {useState} from 'react'
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Topbar from './Components/Topbar/Topbar';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';


function App() {
  console.log("This is a MERN stack portfolio. But i like to focus more on Reactjs")
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;