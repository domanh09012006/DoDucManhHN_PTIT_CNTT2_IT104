import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Bai3() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>MacBook Air 2018</Card.Title>
          <Card.Text>
            The reason I am selling the machine is because it is too much power for what I need
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button variant="primary">Xem chi tiết</Button>
            <span style={{ fontWeight: "bold" }}>30.000.000 đ</span>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>MacBook Pro 2019</Card.Title>
          <Card.Text>
            The reason I am selling the machine is because it is too much power for what I need
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button variant="primary">Xem chi tiết</Button>
            <span style={{ fontWeight: "bold" }}>30.000.000 đ</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
