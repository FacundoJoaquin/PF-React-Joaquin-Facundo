import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ThumbUp from '@mui/icons-material/ThumbUp';

const Boton = () => {
  return (
    <Box sx={{ }}>
      <Button startDecorator={<Add />}>Comprar</Button>
    </Box>
  );
}

export default Boton