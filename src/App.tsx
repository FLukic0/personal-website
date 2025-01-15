import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Homepage } from './pages/homepage';
import { About } from './pages/aboutpage';
import { ExperiencePage } from './pages/experiencepage';
import { Projects } from './pages/projectspage';
import { Notfound } from './pages/404';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<ExperiencePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
