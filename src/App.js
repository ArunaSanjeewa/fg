import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Col, Row, Image } from "antd";
import React from "react";
import NavBarWeb from "./Components/Navbar/NavBarWeb";
import FooterWeb from "./Components/Footer/FooterWeb";
import MapView from "./Components/Map/MapView";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import hart from '../src/assets/hart.svg';
import left_arrow from '../src/assets/left_arrow.svg';
import right_arrow from '../src/assets/right_arrow.svg';



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

        <div class="container set-container">
          <Row >
            <Col xs={24} xl={15} span={15}>
              <MapView />
            </Col>
            <Col xs={24} xl={1} span={15}>

            </Col>
            <Col xs={24} xl={8} span={9}>
              <Row>

                <Col xs={24}>
                  <InputGroup className="">

                    <Form.Control

                      aria-label="Recipient's username"
                      aria-describedby="basic-addon1"
                    />
                    <Button variant="success" style={{ fontSize: 13 }} id="button-addon1">

                      Search
                    </Button>
                  </InputGroup>
                </Col>
                <Col xs={24} className="first-image-view">
                  <div className="first-image-view">
                    <Image src="../images/Rectangle480.png" />
                  </div>
                </Col>


                <Col xs={24}>
                  <div className="first-image-view2">
                    <h4
                      style={{ textAlign: "left", fontSize: "24px" }} // className="txt1"
                    >
                      Butterfly Creek
                    </h4>
                    <div style={{ textAlign: "left", fontSize: "16px", marginBottom: 8 }}>
                      10 Tom Pearce Drive, Auckland Airport
                    </div>
                    <p style={{ textAlign: "left", fontSize: "11px" }}>
                      Welcome and immerse yourself in our tropical butterfly house or
                      travel back in time in Dinosaur Kindom when Dinosaurs Kindom
                      when Dinosars ruled. Meet Scar and Goldie, NZ’s only salt water
                      crocodiles.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xs={24}>
                <a className="hart-view" href="#" style={{ padding: 7 }}><img style={{width:'85%'}}  src={hart} alt="Logo" /></a>
                </Col>
                <Col xs={8}><a className="left-arrow" href="#" style={{     padding:' 4px 9px 4px 5px' }}><img  src={left_arrow} alt="Logo" /></a></Col>
                <Col xs={8}></Col>
                <Col xs={8}><a className="right-arrow" href="#" style={{    padding: "4px 1px 4px 5px"}}><img  src={right_arrow} alt="Logo" /></a></Col>
              </Row>





            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={12} span={12}>
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

            <Col xs={24} xl={12} span={12}>
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
        <FooterWeb />
      </>
    </div>
  );
}

export default App;
