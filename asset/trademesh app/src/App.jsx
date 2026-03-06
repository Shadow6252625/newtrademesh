import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gateway from './pages/Gateway';
import Configuration from './pages/Configuration';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <video className="app-video-bg" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="mesh-bg"></div>
      <div className="grain-overlay"></div>
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/configure" element={<Configuration />} />
        <Route path="/dashboard/:nodeId" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
