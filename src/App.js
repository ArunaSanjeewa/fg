import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Col, Row, Image, Button } from "antd";
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
        {/* <Row>
          <Col span={8}>
            <Image src="../images/Rectangle480.png" />
          </Col>
        </Row> */}

        <div class="container">
          <Row
          // justify="center"
          >
            <Col span={15}> </Col>
            <Col span={9}>
              <Image src="../images/Rectangle480.png" />
              <h4
                style={{ textAlign: "left", fontSize: "30px" }} // className="txt1"
              >
                Butterfly Creek
              </h4>
              <div style={{ textAlign: "left", fontSize: "20px" }}>
                10 Tom Pearce Drive, Auckland Airport
              </div>
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                Welcome and immerse yourself in our tropical butterfly house or
                travel back in time in Dinosaur Kindom when Dinosaurs Kindom
                when Dinosars ruled. Meet Scar and Goldie, NZ’s only salt water
                crocodiles.
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              {" "}
              <div
                style={{
                  textAlign: "left",
                  fontSize: "45px",
                  marginTop: 200,
                  fontWeight: 700,
                }}
                // className="txt2"
              >
                Download the app to add places to save places you like
              </div>
              <p style={{ textAlign: "left", fontSize: "25px" }}>
                Create your own bucket list for your next holiday & Explore
                places around your next adventure and add them to your bucket
                list. Find the best services you need in your area in seconds.
              </p>
              <Button type="primary" style={{ textAlign: "left" }}>
                Google Play
              </Button>
              <Button type="primary">App Store</Button>
            </Col>

            <Col span={12}>
              <img alt="41" src="../images/41.png" className="img2" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <img alt="41" src="../images/16.png" className="img3" />
            </Col>
            <Col span={12}>
              <div style={{ textAlign: "left", fontSize: "25px", marginTop: 300 }}>
                Short Title
              </div>

              <div
                style={{
                  textAlign: "left",
                  fontSize: "45px",
                  
                  fontWeight: 700,
                }}
              >
                Description about app screen
              </div>
              <div style={{ textAlign: "left", fontSize: "25px" }}>
                Explore places around your next adventure and add them to your
                bucket list, Tempor incididunt utlabore et dolore magna aliqua.
                Ut enim adminim veniam quis nostrud exercitation.
              </div>
            </Col>
          </Row>
        </div>
        <FooterWeb/>
      </>
    </div>
  );
}

export default App;
