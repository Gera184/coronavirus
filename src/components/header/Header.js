import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import "./Header.css";

export const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="map-icon-col">
          <a href="/map" className="map-icon" >
            <FaMapMarkedAlt style={{ fontSize: "250%" }} />
          </a>
        </Col>
        <Col className="home-icon-col">
          <a href="/home" className="home-icon">
            <AiTwotoneHome style={{ fontSize: "250%" }} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
