import { useState } from 'react';
import Modal from '../components/Modal';

const Dashboard = () => {
  const [deployments, setDeployments] = useState([
    { name: 'Mesh-1', version: 'v1.0' },
    { name: 'Mesh-2', version: 'v1.2' },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addDeployment = (deployment: { name: string; version: string }) => {
    console.log('Adding deployment:', deployment);
    setDeployments([...deployments, deployment]);
  };

  return (
    <div>
      <h1 className="text-3xl text-gray-800 dark:text-white">Dashboard</h1>
      <button onClick={() => setModalOpen(true)} data-testid="add-deployment-button" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Deployment
      </button>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {deployments.map((deployment, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{deployment.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{deployment.version}</p>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddDeployment={addDeployment} />
    </div>
  );
};

export default Dashboard;
