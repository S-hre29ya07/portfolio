import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ecom from "../../images/Screenshot 2024-05-08 211759.png";
import repol from "../../images/Screenshot 2024-05-08 211927.png";
import library from "../../images/Screenshot 2024-05-08 234212.png";
import port from "../../images/Screenshot 2024-05-08 215643.png";
import { FaCode } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Flip from "react-reveal/Flip";
export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
          <div className="mt-5">
        <Flip top cascade>
          <h1 className="text-white">Projects</h1>
        </Flip>
      </div>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      E-commerce website
                    </h5>
                    <img src={ecom} alt={ecom} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/S-hre29ya07/Clone-Flipkart"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={
                          "https://s-hre29ya07.github.io/Clone-Flipkart/products"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaPlay
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                    
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "white",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Made the clone of the Flipkart using Angular by utilising fake store API.
                      Here users can select the product and add them into the cart, where the cart
                      will show the total items and will sum of the amount of the items. Users can apply filters
                       on products so that they can navigate the page seamlessly. For fetching the items, I have used
                      FakeStore API.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    AngularJS, HTML, CSS.
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Online Library Management System 
                    </h5>
                    <img src={library} alt={library} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/S-hre29ya07/Online-library-system-using-MEAN-Stack"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "white",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      In this project that is online library
                      management system, I have made API's to store books in the system,
                      with the name and description about the book. I have used NodeJS to design API's
                      schemas, routes and controller. For frontend I have used AngularJS and 
                      integrated the API for seamless function of adding the books in the store.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    AngularJS, MongoDB, ExpressJS, NodeJS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Github repository listing system
                    </h5>
                    <img src={repol} alt={repol} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/S-hre29ya07/Github-Repositories-listing-page"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={
                          "https://s-hre29ya07.github.io/Github-Repositories-listing-page/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaPlay
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "white",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      In this project I have used AngularJS to make the Github
                      reporsitory listing page, to fetch the data once user submit the repo-holder
                      name I have used open source Github API. The user can also apply the
                      filter of numbers of repo per page that allows smooth scrolling and better
                      user experience.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    AngularJS, Github API
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Personal Portfolio
                    </h5>
                    <img src={port} alt={port} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/S-hre29ya07/portfolio"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={
                          "https://shreya-singh-portfolio.vercel.app/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaPlay
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "white",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my personal portfolio. Explore my work, skills,
                      and achievements in a concise and visually appealing
                      format. Get a glimpse of my expertise and creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          {/* <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div> */}
        </Container>
      </Container>
    </div>
  );
}
