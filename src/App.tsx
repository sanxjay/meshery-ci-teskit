import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 p-15 text-center text-4xl font-bold">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;