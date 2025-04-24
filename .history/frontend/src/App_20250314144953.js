import './App.css';
import React from "react";
import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h4" color="secondary">
        Welcome to EventHive
      </Typography>
      <Button variant="contained" color="secondary">
        Explore Events
      </Button>
    </Container>
  );
}

export default App;
