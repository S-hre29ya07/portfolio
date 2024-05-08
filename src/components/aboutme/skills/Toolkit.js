import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import react from "../../../images/react.svg";
import html from "../../../images/html.svg";
import css from "../../../images/css.svg";
import js from "../../../images/javascript.svg";
import NextJS from "../../../images/nextJS.svg";
import vue from "../../../images/vue.svg";
import tailwind from "../../../images/tailwind.svg";
import angular from "../../../images/angular.svg";
import Bootstrap from "../../../images/bootstrap.svg";
import node from "../../../images/120px-Node.js_logo.svg.png";
import express from "../../../images/138693662620566940498361818929073891427.jpg";
import mongoDB from "../../../images/mongodb-icon.svg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <Zoom left cascade>
        <h1 className="mt-4 text-white">Skills I have</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={react} alt="" style={{ width: "85%", height: "85%" }} />
            <h5 className="text-white mt-5">ReactJS</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={html} alt="" style={{ width: "85%", height: "85%" }} />
            <h5 className="text-white mt-3">HTML</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={css} alt="" style={{ width: "85%", height: "85%" }} />
            <h5 className="text-white mt-3">CSS</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img
              src={js}
              alt=""
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
            <h5 className="text-white mt-4">JavaScript</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={NextJS} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white mt-2">Next JS</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={vue} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white mt-4">Vue JS</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={tailwind} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white mt-5">Tailwind CSS</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={angular} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white">Angular JS</h5>
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
            <img src={Bootstrap} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white mt-2">Bootstrap</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={node} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white mt-5">Node JS</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={express} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white mt-5">Express JS</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={mongoDB} alt="" style={{ width: "95%", height: "95%" }} />
            <h5 className="text-white">MongoDB</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
