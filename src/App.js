import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import ListPicker from "./ListPicker";
import "./App.css";

const App = () => {
  const listOfRows = [
    { id: "1", name: "1" },
    { id: "12", name: "12" },
    { id: "13", name: "13" },
    { id: "14", name: "14" },
    { id: "15", name: "15" },
    { id: "16", name: "16" },
    { id: "17", name: "17" },
    { id: "18", name: "18" },
  ];
  const selectedListOfRows = [];

  const [availableList, setAvailableList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  const onListChange = (leftRows, rightRows) => {
    setAvailableList(leftRows);
    setSelectedList(rightRows);
  };

  const onSave = () => {
    var data = {
      availableList,
      selectedList,
    };
    console.log("Save to API", JSON.stringify(data));
  };
  return (
    <Container fluid>
      <ListPicker
        leftRows={listOfRows}
        rightRows={selectedListOfRows}
        onChange={onListChange}
      />
      <button onClick={onSave}>Save</button>
    </Container>
  );
};

export default App;
