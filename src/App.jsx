import './App.scss';
import {useState} from 'react'
import Intro from './Components/Intro/Intro';
import Topbar from './Components/Topbar/Topbar';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
function App() {
  console.log("This is a MERN stack portfolio. But i like to focus more on Reactjs")
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        {/* <Contact/> */}
      </div>
    </div>
  );
}

export default App;