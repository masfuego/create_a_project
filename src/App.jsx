import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import LiveProjects from "./components/liveProjects";
import { supabase } from "./supabaseClient";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .limit(10);
      if (error) throw error;
      if (data != null) {
        setProjects(data); // [project1,project2,project3]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createProject() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .insert({
          name: title,
          description: description,
      }).single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(projects);
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Vines</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by MasFuego</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          {/* <Col xs={12} md={6}> */}
          <Col xs={12}>
            <h3>Crate a project</h3>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button onClick={() => createProject()}>Create Project on Supabase</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Live Vine Projects</h3>
        <Row xs={1} lg={3} className="g-4">
          {projects.map((project) => (
            <Col>
              <LiveProjects project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
