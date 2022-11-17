import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-dark text-white">
      <Container className="d-flex justify-content-between p-10px ">
        <p>Support</p>
        <p>Settings</p>
        <p>Web developer</p>
      </Container>
    </Container>
  );
};

export default Footer;
