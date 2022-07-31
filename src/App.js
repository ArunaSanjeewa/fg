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
  <div className="App" >
      <>
        <NavBarWeb />
        <Row></Row>
        {/* <Row>
          <Col span={8}>
            <Image src="../images/Rectangle480.png" />
          </Col>
        </Row> */}

        <div class="container set-container">
          <Row>
          <Col xs={24} xl={15}  ></Col>
          <Col xs={24} xl={9}  >
              <img alt="480" src="../images/Rectangle480.png" class="img-fluid" />
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
          <Col xs={24} xl={12}  style={{ paddingTop:'20%'}} >
              {" "}
              <div
                style={{
                  textAlign: "left",
                  fontSize: "45px",                  
                  fontWeight: 700,
                 
                }}
                
              >
                Download the app to add places to save places you like
              </div>
              <p style={{ textAlign: "left", fontSize: "25px" }}>
                Create your own bucket list for your next holiday & Explore
                places around your next adventure and add them to your bucket
                list. Find the best services you need in your area in seconds.
              </p>
              <button type="button" class="btn btn-outline-dark btn-lg" >
              <b>Play Store</b></button>
              
              <button type="button" class="btn btn-outline-dark btn-lg">
             
                <b>App Store</b></button>
            </Col>

            <Col xs={24} xl={12}  className="iconHome1">
              <img alt="41" src="../images/41.png" className="img2" class="img-fluid"/>
            </Col>
          </Row>
          <Row>
          <Col xs={24} xl={12}  >
              <img alt="41" src="../images/16.png" className="img3" class="img-fluid" />
            </Col>
            <Col xs={24} xl={12}  >
              <div
                style={{ textAlign: "left", fontSize: "25px", marginTop: 300 }}
              >
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
          <Row>
          <Col xs={24} xl={12}  >
              <div
                style={{ textAlign: "left", fontSize: "25px", marginTop: 300 }}
              >
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
            <Col xs={24} xl={12}  >
              <img alt="41" src="../images/39.png" className="img3" class="img-fluid"/>
            </Col>
          </Row>
          <Row>
          <Col xs={24} xl={12}  >
              <img alt="41" src="../images/23.png" className="img3" class="img-fluid" />
            </Col>
            <Col xs={24} xl={12}  >
              <div
                style={{ textAlign: "left", fontSize: "25px", marginTop: 300 }}
              >
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
        <FooterWeb />
      </>
    </div>
  );
}

export default App;
