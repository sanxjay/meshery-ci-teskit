import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDeployment: (deployment: { name: string; version: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddDeployment }) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddDeployment({ name, version });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-80 shadow-lg rounded-md bg-white dark:bg-gray-800">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Add New Deployment</h3>
          <form onSubmit={handleSubmit} className="mt-2 px-7 py-3">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded" />
            <input type="text" placeholder="Version" value={version} onChange={(e) => setVersion(e.target.value)} className="mt-3 w-full px-3 py-2 text-gray-700 bg-gray-200 rounded" />
            <div className="items-center px-4 py-3">
              <button id="ok-btn" className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Add
              </button>
            </div>
          </form>
          <div className="items-center px-4 py-3">
            <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
