import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navItems = [
  { to: '/', label: 'Users', end: true },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' }
];

const apiBaseUrl = (() => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  if (!codespaceName) {
    return 'http://localhost:8000';
  }

  return `https://${codespaceName}-8000.app.github.dev`;
})();

function App() {
  return (
    <div className="app-shell container py-4">
      <header className="mb-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <p className="text-uppercase text-primary fw-semibold mb-1">OctoFit Tracker</p>
            <h1 className="h2 mb-0">Student fitness dashboard</h1>
          </div>
          <div className="badge bg-light text-dark border">API: {apiBaseUrl}</div>
        </div>
        <p className="text-muted mt-3 mb-0">
          VITE_CODESPACE_NAME must be defined in .env.local for Codespaces URLs. If it is unset,
          the app falls back to localhost.
        </p>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow-sm mb-4">
        <div className="container-fluid">
          <div className="navbar-nav d-flex flex-row flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-dark'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
