import { Button, Card, Container, Row, Pagination, Col } from "react-bootstrap";
import { applicationContext } from "../context/sittingsContext";
import React, { useContext, useState } from "react";
import Auth from "./todo/Auth";
import { parse } from "superagent";

export default function List(props) {
  const setting = useContext(applicationContext);
  const [number, setNumber] = useState(1);

  const { list, toggleComplete, completedHandeler, deleteItem } = props;
  console.log("dddddddddddd", list);

  function numberHandeler(index) {
    setNumber(index + 1);
  }

  function paginationHandeler() {
    let arrayperScreen = [];

    if (!setting.NumberOfItemsToDisplay) {
      localStorage.setItem("perScreen", JSON.stringify(2));
      setting.setNumberOfItemsToDisplay(
        parse(localStorage.getItem("perScreen"))
      );
    }
    // setcompletedListtt([completedListtt, ...list.slice(index)])
    for (
      let index = 0;
      index < list.length / setting.NumberOfItemsToDisplay;
      index++
    ) {
      arrayperScreen.push(
        <div style={{ display: "inline-block", margin: "20px" }}>
          <Pagination size="lg">
            <Pagination.Item
              onClick={() => numberHandeler(index)}
              key={index + 1}
              active={index === number - 1}
            >
              {index + 1}
            </Pagination.Item>
          </Pagination>
        </div>
      );
    }

    return arrayperScreen;
  }

  return (
    <>
      

      <Container>
        <Row>
          {list
            .slice(
              (number - 1) * setting.NumberOfItemsToDisplay,
              number * setting.NumberOfItemsToDisplay
            )
            .map((item) => (
              <Col>
                <Card text={"white"} bg={"danger"} style={{ width: "15vw" }}>
                  <Card.Body>
                    <Card.Title>{item.task}</Card.Title>
                    <Card.Text>Assigned to:{item.name}</Card.Text>
                    <Card.Text>Difficulty: {item.difficulty}</Card.Text>
                    <Auth capability="update">
                      <Button
                        style={{ margin: "10px" }}
                        onClick={() => toggleComplete(item, item.id)}
                      >
                        Complete: {item.complete.toString()}
                      </Button>
                    </Auth>
                    <Auth capability="delete">
                      <Button
                        style={{ margin: "10px" }}
                        onClick={() => deleteItem(item.id)}
                      >
                        Delete Item
                      </Button>
                    </Auth>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      {paginationHandeler()}
    </>
  );
}
