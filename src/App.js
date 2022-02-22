import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import ListPicker from "./ListPicker";
import "./App.css";

const App = () => {
  const leftRows = [
    { id: "1", name: "1" },
    { id: "12", name: "12" },
    { id: "13", name: "13" },
    { id: "14", name: "14" },
    { id: "15", name: "15" },
    { id: "16", name: "16" },
    { id: "17", name: "17" },
    { id: "18", name: "18" }
  ];
  const rightRows = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
    { id: "4", name: "4" },
    { id: "5", name: "5" },
    { id: "6", name: "6" },
    { id: "7", name: "7" },
    { id: "8", name: "8" }
  ];
  return (
    <Container fluid>
      <ListPicker leftRows={leftRows} rightRows={rightRows} />
    </Container>
  );
};

export default App;
