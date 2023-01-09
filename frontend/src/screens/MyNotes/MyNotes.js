import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title={"Welcome Back Arun.."}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      {notes.map((note) => (
        <>
          <Accordion key={note._id}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
                <span>{note.title}</span>
              </Accordion.Header>
              <Accordion.Body>
                <Badge bg="success">Category - {note.category}</Badge>
                <blockquote className="blockquote mb-0">
                  <p className="fs-6 mt-2">{note.content}</p>
                  <footer style={{ fontSize: 14, opacity: 0.5 }}>
                    Created on - date
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
