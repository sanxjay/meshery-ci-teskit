import { useTranslation } from 'react-i18next';
import { useUIStore } from '../store/uiStore';
import { Switch, FormControlLabel, Select, MenuItem, Typography, Box } from '@mui/material';

function Settings() {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useUIStore();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('settingsTitle')}
      </Typography>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
        label="Dark Theme"
      />
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">{t('language')}</Typography>
        <Select value={i18n.language} onChange={handleLanguageChange}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
          <MenuItem value="de">Deutsch</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

export default Settings;