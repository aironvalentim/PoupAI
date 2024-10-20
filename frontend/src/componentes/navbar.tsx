import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        style={{ margin: '0 70px', backgroundColor: '#ececec', color: '#000' }} 
      >
        Passo 1
      </Button>
      <Button
        style={{ margin: '0 70px', backgroundColor: '#ececec', color: '#000' }} 
      >
        Passo 2
      </Button>
      <Button
        style={{ margin: '0 70px', backgroundColor: '#ececec', color: '#000' }} 
      >
        Passo 3
      </Button>
      <Button
        style={{ margin: '0 70px', backgroundColor: '#ececec', color: '#000' }} 
      >
        Passo 4
      </Button>
    </Toolbar>
  );
};

export default Navbar;