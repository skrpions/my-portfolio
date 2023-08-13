import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Companies } from './components/Companies';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects />
      <Companies/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
