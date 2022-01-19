
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import "../src/styles/index.scss";
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">



      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
