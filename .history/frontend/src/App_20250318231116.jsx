
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import Events from './Pages/Events.jsx';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to EventHive
        </Typography>
        
        <Routes>
          <Route path="/events" element={<Events />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
