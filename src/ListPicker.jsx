import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
const ListPicker = ({ leftRows = [], rightRows = [] }) => {
  const [leftRowSelection, setLeftRowSelection] = useState(null);
  const [rightRowSelection, setRightRowSelection] = useState(null);
  const [leftRowList, setLeftRowList] = useState([...leftRows]);
  const [rightRowList, setRightRowList] = useState([...rightRows]);

  const onLeftRowSelect = (row) => {
    return () => {
      setLeftRowSelection(row);
    };
  };

  const onRightRowSelect = (row) => {
    return () => {
      setRightRowSelection(row);
    };
  };

  const onAddAllLeftToRight = () => {
    setRightRowList([...rightRowList, ...leftRowList]);
    setLeftRowSelection(null);
    setLeftRowList([]);
  };

  const onAddSelectedLeftToRight = () => {
    if (leftRowSelection === null) {
      return alert("no selection");
    }
    setRightRowList([...rightRowList, leftRowSelection]);
    const newLeftRowList = leftRowList.filter(
      (row) => row.id !== leftRowSelection.id
    );
    setLeftRowSelection(null);
    setLeftRowList(newLeftRowList);
  };
  const onAddAllRightToLeft = () => {
    setLeftRowList([...rightRowList, ...leftRowList]);
    setRightRowSelection(null);
    setRightRowList([]);
  };

  const onAddSelectedRightToLeft = () => {
    if (rightRowSelection === null) {
      return alert("no selection");
    }
    setLeftRowList([...leftRowList, rightRowSelection]);
    const newRightRowList = rightRowList.filter(
      (row) => row.id !== rightRowSelection.id
    );
    setRightRowSelection(null);
    setRightRowList(newRightRowList);
  };

  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={5}>
            <Card className="list-picker-card">
              <ListGroup>
                {leftRowList &&
                  leftRowList.length > 0 &&
                  leftRowList.map((row) => {
                    return (
                      <ListGroup.Item
                        key={row.id}
                        action
                        variant="light"
                        active={
                          leftRowSelection && leftRowSelection.id === row.id
                        }
                        onClick={onLeftRowSelect(row)}
                      >
                        {row.name}
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Card>
          </Col>
          <Col xs={2} className="list-picker-action">
            <Card className="list-picker-action-card">
              <ListGroup>
                <ListGroup.Item
                  action
                  variant="primary"
                  onClick={onAddAllLeftToRight}
                >
                  <FontAwesomeIcon icon={faAnglesRight} />
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  variant="primary"
                  onClick={onAddSelectedLeftToRight}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  variant="primary"
                  onClick={onAddSelectedRightToLeft}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  variant="primary"
                  onClick={onAddAllRightToLeft}
                >
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={5}>
            <Card className="list-picker-card">
              <ListGroup>
                {rightRowList &&
                  rightRowList.length > 0 &&
                  rightRowList.map((row) => {
                    return (
                      <ListGroup.Item
                        key={row.id}
                        action
                        variant="light"
                        active={
                          rightRowSelection && rightRowSelection.id === row.id
                        }
                        onClick={onRightRowSelect(row)}
                      >
                        {row.name}
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ListPicker;
