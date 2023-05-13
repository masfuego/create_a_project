import { Card, Button, Form } from "react-bootstrap";

import React from "react";

function LiveProjects() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>prj title goes here</Card.Title>
        <Card.Text>the description goes here</Card.Text>
        <Button className="px-5"> Apply </Button> 
        {' '}
        <Button className="px-5" variant="outline-secondary"> Fund </Button>
      </Card.Body>
    </Card>
  );
}

export default LiveProjects;
