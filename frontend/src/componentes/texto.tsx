import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Box, Button } from '@mui/material';
import { useValor } from './valorcontext';
import Valor from './valor'

const Texto = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const handle = () => {
        setShowDropdown(true);
    }
    if (showDropdown) {
        return <Valor />;
    }
    const { valor } = useValor();
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
      <Card sx={{ maxWidth: 1000 }}>
        <CardContent>
          <Typography variant="h5" align="left">
              <p>O valor minímo de entrada do imóvel pode variar entre: R${valor*0.10} e R${valor*0.30}</p>
              <p>Sugestão para alcançar o valor desejado:</p>
          </Typography>
          <Typography variant="h6" align="left">
              <p>Freelancing: Utilize suas habilidades em áreas como design gráfico, redação, programação ou marketing digital em plataformas como Upwork, Fiverr ou Freelancer.</p>
              <p>Venda de produtos artesanais: Se você tem habilidades manuais, considere vender produtos artesanais em sites como Etsy ou em feiras locais.</p>
              <p>Aulas particulares: Ofereça aulas em disciplinas que você domina, seja presencialmente ou online, em plataformas como Superprof ou Tutor.com.</p>
              <p>Blogging/Vlogging: Crie um blog ou canal no YouTube sobre um tema que você gosta e monetize com anúncios ou parcerias.</p>
          </Typography>
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
          Voltar
        </Button>
        </CardContent>
      </Card>
    </Box>
    );
  };
  
  export default Texto;