import React, { useState } from 'react';
import { Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, Box, Button, Toolbar } from '@mui/material';
import Valor from './valor';

const CentralizedCardWithDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showNextComponent, setShowNextComponent] = useState<boolean>(false);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedOption(event.target.value as string);
  };

  const handleNext = () => {
    setShowNextComponent(true);
  };

  if (showNextComponent) {
    return <Valor />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '87vh',
        position: 'relative',
      }}
    >
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Selecione Seu Objetivo
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="dropdown-label">Objetivo</InputLabel>
            <Select
              labelId="dropdown-label"
              value={selectedOption}
              label="Objetivo"
              onChange={handleSelectChange}
            >
              <MenuItem value="opcao1">Comprar uma Casa</MenuItem>
              <MenuItem value="opcao2">...</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>

      {selectedOption && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
          }}
        >
          Próximo
        </Button>
      )}
    </Box>
  );
};

export default CentralizedCardWithDropdown;