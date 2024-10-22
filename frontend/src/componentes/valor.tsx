import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Box, Button } from '@mui/material';
import Texto from './texto';
import Dropdown from './dropdown';
import { useValor} from './valorcontext';

const valor: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showNextComponent, setShowNextComponent] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { setValor } = useValor();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setValor(inputValue);
    setShowNextComponent(true);
  };
  const handle = () => {
    setShowDropdown(true);
  };

  if (showNextComponent) {
    return <Texto />;
  }
  if (showDropdown) {
    return <Dropdown />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '87vh',
      }}
    >
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Insira o valor do imovél
          </Typography>
          <TextField
            label="R$ XXXXX.XX"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />

    {inputValue && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
          }}
        >
          Próximo
        </Button>
          )}
        <Button
          variant="contained"
          color="primary"
          onClick={handle}
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
          }}
        >
          voltar
        </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default valor;