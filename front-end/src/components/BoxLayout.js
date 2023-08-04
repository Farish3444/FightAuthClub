import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function BoxLayout({bgcolor,children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: bgcolor, height: '100%' }}> 
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}