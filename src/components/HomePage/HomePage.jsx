import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const HomePage = ({ getContacts, contacts }) => {
  const [selectedContact, setSelectedContact] = useState("");
  const [hover, setHover] = useState("");
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="container d-flex flex-wrap justify-content-between">
      {contacts.map((item) => (
        <Card
          onClick={() => setSelectedContact(item.id)}
          onMouseEnter={() => setHover(item.id)}
          onMouseLeave={() => setHover("")}
          key={item.id}
          style={{
            width: "15rem",
            margin: "1rem",
            transition: "0.8s",
            border: selectedContact === item.id ? "1px solid black" : "",
            transform: hover === item.id ? "scale(1.15)" : "scale(1)",
          }}
        >
          <Card.Img src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.surname}</Card.Text>
            <Card.Text>{item.phone}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
