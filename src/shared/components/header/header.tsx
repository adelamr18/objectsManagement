import React from "react";
import { Navbar } from "react-bootstrap";
import { titles } from "../../constants/defines";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container-inner">
      <Navbar bg="light" expand="lg">
        <div className="header-title">
          <Navbar.Brand>
            <h3>{titles.objectsHeader}</h3>
          </Navbar.Brand>
        </div>
        <div className="header-toggle">
          <Navbar.Toggle />
        </div>
      </Navbar>
    </div>
  );
}
