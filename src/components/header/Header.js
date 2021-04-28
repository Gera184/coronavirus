import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import "./Header.css";

export const Header = () => {
  return (
    <div class="col text-center align-self-center">
      <a href="/home" className="navbar badge">
        Home
      </a>

      <a href="/map" className="navbar badge">
        Map
      </a>
    </div>
  );
};
