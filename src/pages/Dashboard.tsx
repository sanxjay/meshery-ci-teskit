import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Modal from '../components/Modal';

const Dashboard = () => {
  const { t } = useTranslation();
  const [deployments, setDeployments] = useState([
    { name: 'Mesh-1', version: 'v1.0', status: 'Running' },
    { name: 'Mesh-2', version: 'v1.2', status: 'Stopped' },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addDeployment = (deployment) => {
    setDeployments([...deployments, { ...deployment, status: 'Running' }]);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {t('dashboardTitle')}
      </Typography>
      <Button variant="contained" onClick={() => setModalOpen(true)} data-testid="add-deployment-button">
        Add Deployment
      </Button>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Version</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deployments.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.version}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddDeployment={addDeployment} deployments={deployments} />
    </Box>
  );
};

export default Dashboard;
