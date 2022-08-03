import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Col, Row, Image } from "antd";
import { useState, useEffect } from "react";
import NavBarWeb from "./Components/Navbar/NavBarWeb";
import FooterWeb from "./Components/Footer/FooterWeb";
import MapView from "./Components/Map/MapView";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Input } from "semantic-ui-react";
import hart from "../src/assets/hart.svg";
import left_arrow from "../src/assets/left_arrow.svg";
import right_arrow from "../src/assets/right_arrow.svg";
import search_icon from "../src/assets/search icon.svg";
import app_store from "../src/assets/app_store.svg";
import google_play from "../src/assets/google-play1.svg";

import axios from "axios";

function App() {
  const [apiArray, setapiArray] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://ec2-13-211-131-132.ap-southeast-2.compute.amazonaws.com:3000/api/search?lat=-35.3810867&lng=174.0588784&radius=1000&showCoupons=false&categories=adventure^financial_services^relax&id=sudesh_android_1235"
        );
        setapiArray(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, []);

  return (
    <div className="App">
      <>
        <NavBarWeb />
        <link
          href="http://fonts.cdnfonts.com/css/circular-std"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Outfit"
        ></link>
        {/* <Row>
          <Col span={8}>
            <Image src="../images/Rectangle480.png" />
          </Col>
        </Row> */}

        <div class="container set-container">
          <Row className="first-row" id="home">
            <Col xs={24} style={{ height: 63 }}></Col>
            <div style={{ zIndex: 1000 }} class="fab mobile-only">
              <Row style={{ width: "100%" }}>
                <InputGroup>
                  <InputGroup.Text style={{ backgroundColor: "#ffffff" }}>
                    <img src={search_icon} alt="Logo" />
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Row>
            </div>
            <Col xs={24} xl={15} span={15} className="map-view-col">
              {apiArray.length > 0 ? <MapView details={{ apiArray }} /> : ""}
            </Col>
            <Col xs={24} xl={1} span={15}></Col>
            <Col xs={24} xl={8} span={9} className="web-only web-only-2">
              <Row className="side-row web-only">
                <Col xs={24}>
                  {/* <InputGroup>

                    <Form.Control
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon1"
                    />
                    <Button
                      variant="success"
                      style={{ fontSize: 13 }}
                      id="button-addon1"
                    >
                      Search
                    </Button>
                  </InputGroup> */}

                  <InputGroup className="mb-3">
                    <InputGroup.Text className="search_icon_style">
                      <img src={search_icon} alt="Logo" />
                    </InputGroup.Text>

                    <Form.Control
                      className="search_input_style"
                      aria-label="Dollar amount (with dot and two decimal places)"
                    />
                    <Button
                      className="search_btn"
                      variant="success"
                      style={{ fontSize: 13 }}
                      id="button-addon1"
                    >
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
                    <div
                      style={{
                        textAlign: "left",
                        fontSize: "16px",
                        marginBottom: 8,
                      }}
                    >
                      10 Tom Pearce Drive, Auckland Airport
                    </div>
                    <p style={{ textAlign: "left", fontSize: "11px" }}>
                      Welcome and immerse yourself in our tropical butterfly
                      house or travel back in time in Dinosaur Kindom when
                      Dinosaurs Kindom when Dinosars ruled. Meet Scar and
                      Goldie, NZ’s only salt water crocodiles.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xs={24}>
                  <a className="hart-view" href="#" style={{ padding: 7 }}>
                    <img style={{ width: "85%" }} src={hart} alt="Logo" />
                  </a>
                </Col>
                <Col xs={8} className="left-arrow-col">
                  <a
                    className="left-arrow"
                    href="#"
                    style={{ padding: " 4px 9px 4px 5px" }}
                  >
                    <img src={left_arrow} alt="Logo" />
                  </a>
                </Col>
                <Col xs={8}></Col>
                <Col xs={8} className="right-arrow-col">
                  <a
                    className="right-arrow"
                    href="#"
                    style={{ padding: "4px 1px 4px 5px" }}
                  >
                    <img src={right_arrow} alt="Logo" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="planner" className="r1container">
            <Col xs={24} xl={12} span={12} style={{ textAlign: "justify" }}>
              {" "}
              <div
                style={{
                  textAlign: "left",
                  fontSize: "45px",
                  fontWeight: 700,
                  fontFamily: "Circular Std",
                }}
              >
                Download the app to add places to save places you like
              </div>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "25px",
                  color: "#515151",
                  fontFamily: "Outfit",
                  fontWeight: 400,
                }}
              >
                Create your own bucket list for your next holiday & Explore
                places around your next adventure and add them to your bucket
                list. Find the best services you need in your area in seconds.
              </p>
              {/* <button type="button" class="btn btn-outline-dark btn-lg"  style={{margin: 3}}>
              <img src={google_play} alt="Logo" /><b>Play Store</b></button>
              
              <button type="button" class="btn btn-outline-dark btn-lg" style={{margin: 3}}>
             
              <img src={app_store} alt="Logo" />   <b>App Store</b></button> */}
              <div class="icons" style={{ paddingBlock: 40 }}>
                <a className="downlod-icon" href="#">
                  <img style={{ width: "18%" }} src={google_play} alt="Logo" />{" "}
                  <span style={{ fontFamily: "Outfit", fontWeight: 700 }}>
                    Google Play
                  </span>
                </a>
                <a className="downlod-icon" href="#">
                  <img
                    style={{
                      width: "18%",
                      fontFamily: "Outfit",
                      fontWeight: 700,
                    }}
                    src={app_store}
                    alt="Logo"
                  />{" "}
                  <span style={{ fontFamily: "Outfit", fontWeight: 700 }}>
                    App Store
                  </span>
                </a>
              </div>
            </Col>

            <Col xs={24} xl={12} className="iconHome1">
              <img
                alt="41"
                src="../images/41.png"
                className="img2"
                class="img-fluid"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={12}>
              <img
                alt="41"
                src="../images/16.png"
                className="img3"
                class="img-fluid"
              />
            </Col>
            <Col xs={24} xl={12}>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "25px",
                  marginTop: 300,
                  color: "#41AF4B",
                }}
              >
                Short Title
              </div>

              <div
                style={{
                  textAlign: "left",
                  fontSize: "45px",

                  fontWeight: 700,
                  fontFamily: "Circular Std",
                }}
              >
                Description about app screen
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "25px",
                  color: "#515151",
                  fontFamily: "Outfit",
                  fontWeight: 400,
                }}
              >
                Explore places around your next adventure and add them to your
                bucket list, Tempor incididunt utlabore et dolore magna aliqua.
                Ut enim adminim veniam quis nostrud exercitation.
              </div>
            </Col>
          </Row>
          <Row className="r3container">
            <Col xs={24} xl={12}>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "25px",
                  marginTop: 300,
                  color: "#41AF4B",
                }}
              >
                Short Title
              </div>

              <div
                style={{
                  textAlign: "left",
                  fontSize: "45px",
                  fontFamily: "Circular Std",
                  fontWeight: 700,
                }}
              >
                Description about app screen
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "25px",
                  color: "#515151",
                  fontFamily: "Outfit",
                  fontWeight: 400,
                }}
              >
                Explore places around your next adventure and add them to your
                bucket list, Tempor incididunt utlabore et dolore magna aliqua.
                Ut enim adminim veniam quis nostrud exercitation.
              </div>
            </Col>
            <Col xs={24} xl={12}>
              <img
                alt="41"
                src="../images/39.png"
                className="img3"
                class="img-fluid"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={12}>
              <img
                alt="41"
                src="../images/23.png"
                className="img3"
                class="img-fluid"
              />
            </Col>
            <Col xs={24} xl={12}>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "25px",
                  marginTop: 300,
                  color: "#41AF4B",
                }}
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
              <div
                style={{
                  textAlign: "left",
                  fontSize: "25px",
                  color: "#515151",
                  fontFamily: "Outfit",
                  fontWeight: 400,
                }}
              >
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
