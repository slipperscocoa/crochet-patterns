import React, { useState } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/Header';
import FormApp from './components/Form';
// import ColumnsApp from './components/Columns';
import CardApp from './components/Card';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(preNotes => {
      return [...preNotes, note]
    })
  }

  function delNote(id) {
    setNotes(preNotes => {
      return preNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <br />
      <FormApp addNote={addNote} />
      <br />
      <br />
      <br />
      {/* <ColumnsApp delNote={delNote} /> */}
      <Container fluid="lg">
        <Row>
          <Col style={{ marginLeft: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Amigurumi</h1>
            <br />
            {notes.filter(note => note.category === "Amigurumi").map((note, index) => (
              <CardApp id={index} delNote={delNote} title={note.title} description={note.description} url={note.url} category={note.category} />
            ))}
            <br/>
          </Col>
          <Col>
            <h1>Clothing</h1>
            <br/>
            {notes.filter(note => note.category === "Clothing").map((note, index) => (
              <CardApp id={index} delNote={delNote} title={note.title} description={note.description} url={note.url} category={note.category} />
            ))}
          </Col>

          <Col>
            <h1>Blanket</h1>
            <br/>
            {notes.filter(note => note.category === "Blanket").map((note, index) => (
              <CardApp id={index} delNote={delNote} title={note.title} description={note.description} url={note.url} category={note.category} />
            ))}
          </Col>

          <Col>
            <h1>Basket</h1>
            <br/>
            {notes.filter(note => note.category === "Basket").map((note, index) => (
              <CardApp id={index} delNote={delNote} title={note.title} description={note.description} url={note.url} category={note.category} />
            ))}
          </Col>

          <Col>
            <h1>Other</h1>
            <br/>
            {notes.filter(note => note.category === "Other").map((note, index) => (
              <CardApp id={index} delNote={delNote} title={note.title} description={note.description} url={note.url} category={note.category} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
