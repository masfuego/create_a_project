import { Card, Button, Form } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { supabase } from "../supabaseClient";

function LiveProjects(props) {
  const project = props.project;

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

  async function updateProject() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .update({
          name: title,
          description: description,
        })
        .eq("id", project.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteProject() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .delete()
        .eq("id", project.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <Card>
      <Card.Body>
        {editing == false ? (
          <>
            <Card.Title>{project.name} </Card.Title>
            <Card.Text> {project.description} </Card.Text>
            <Button
              className="px-5"
              variant="danger"
              onClick={() => deleteProject()}
            >
              {" "}
              Delete{" "}
            </Button>{" "}
            <Button
              className="px-5"
              variant="outline-secondary"
              onClick={() => setEditing(true)}
            >
              {" "}
              Edit{" "}
            </Button>
          </>
        ) : (
          <>
            <h4>editing</h4>
            <Button size="sm" onClick={() => setEditing(false)}>
              Go back
            </Button>
            <br></br>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              defaultValue={project.name}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              id="description"
              defaultValue={project.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button onClick={() => updateProject()}>
              Update project in supabase database
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default LiveProjects;
