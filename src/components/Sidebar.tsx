import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 shadow-md">
      <div className="p-5 text-3xl font-bold text-gray-800 dark:text-white">Meshery</div>
      <nav>
        <NavLink to="/" className="block py-3 px-4 text-lg rounded transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white">Dashboard</NavLink>
        <NavLink to="/settings" className="block py-3 px-4 text-lg rounded transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white">Settings</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
