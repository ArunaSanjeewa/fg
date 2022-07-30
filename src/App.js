import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Col, Row, Image } from "antd";
import React from "react";
import NavBarWeb from "./Components/Navbar/NavBarWeb";
import FooterWeb from "./Components/Footer/FooterWeb";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <>
        <NavBarWeb />
        <Row></Row>
        <Row>
          <Col span={8}>
            <Image src="../images/Rectangle480.png" />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={18}> </Col>
          <Col span={6}>
            <Image src="../images/Rectangle480.png" />
            {/* <Image src="../images/16.png" /> */}
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            {" "}
            <h2>Download the app to add places to save places you like</h2>
            {/* <Image src="../images/23.png" /> */}
          </Col>
          {/* <Col span={8}>
            <Image src="../images/39.png" />
          </Col> */}
          <Col span={6}>
            {" "}
            <Image src="../images/41.png" />
          </Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
        <FooterWeb/>
      </>
    </div>
  );
}

export default App;
