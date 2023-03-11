// import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <br />
      <div>
        <Card>
          <Card.Header as="h5">
            Are you a Professional service provider looking to earn more?
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Find the most suitable platform here to grow your business. Register Now!!!
            </Card.Title>
            <Card.Text>Click below to continue</Card.Text>
            <Button variant="success" href="/RegisterServiceProvider">
              For Professional
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <div>
        <Card>
          <Card.Header as="h5">
            Are you our beloved customer looking for a service on your door?
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Find your solution right here. Register Now!!!
            </Card.Title>
            <Card.Text>Click below to continue</Card.Text>
            <Button variant="success" href="/RegisterCustomer">
              For Customer
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
