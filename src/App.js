import logo from "./logo.svg";
import "./App.css";
import { Col, Row, Image } from "antd";
import React from "react";

function App() {
  return (
    <div className="App">
      <>
        <Row>
          <Col span={8}>
            <Image src="../images/Rectangle480.png" />
          </Col>
          <Col span={4}>
            {" "}
            <Image src="../images/Rectangle480.png" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </>
    </div>
  );
}

export default App;
