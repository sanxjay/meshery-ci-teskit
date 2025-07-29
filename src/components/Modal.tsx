import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDeployment: (deployment: { name: string; version: string }) => void;
  deployments: { name: string; version: string; status: string; }[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddDeployment, deployments }) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('1.0');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setError('Name is required');
      return;
    }
    if (deployments.some((d) => d.name === name && d.version === version)) {
      setError('Deployment with this name and version already exists!');
      return;
    }
    onAddDeployment({ name, version });
    setName('');
    setVersion('1.0');
    setError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add New Deployment</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            error={!!error}
            helperText={error}
          />
          <TextField
            margin="dense"
            id="version"
            label="Version"
            type="text"
            fullWidth
            variant="standard"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
