import React from 'react'
import { Container, Row, Col,Nav } from "react-bootstrap";
import { Link,Outlet } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Flip from "react-reveal/Flip";

export default function AboutmeContainer() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                <div className="mt-5">
                    <Flip top cascade>
                    <h1 className="text-white">About</h1>
                    </Flip>
                </div>
                    <Col ms={12} className="mt-3 d-flex flex-column">
                        <div>
                            <Nav justify variant="tabs" defaultActiveKey="/">
                           
                            </Nav>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
