// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import CardApp from './Card';

// function ColumnsApp({delNote}) {
//     const [notes, setNotes] = useState([]);
    
//     return (
//         <div>
//             <Container fluid="lg">
//                 <Row>
//                     <Col style={{ marginLeft: "20px" }}>
//                         <h1 style={{ textAlign: "center" }}>Amigurumi</h1>
//                         <br />
//                         {notes.filter(note => note.category === "Amigurumi").map((note, index) => (
//                             <CardApp id={index} delNote={delNote} title={note.title} description={note.description} url={note.url} category={note.category} />
//                         ))}
//                     </Col>
//                     <Col>
//                         <h1>Clothing</h1>
//                         <Card style={{ width: '18rem', textAlign: "left" }}>
//                             <Card.Text>This is some text within a card body. What will happen if I make this longer?</Card.Text>
//                         </Card>
//                     </Col>

//                     <Col>
//                         <h1>Blanket</h1>
//                         <Card style={{ width: '18rem', textAlign: "left" }}>
//                             <Card.Text>This is some text within a card body. What will happen if I make this longer?</Card.Text>
//                         </Card>
//                     </Col>

//                     <Col>
//                         <h1>Basket</h1>
//                         <Card style={{ width: '18rem', textAlign: "left" }}>
//                             <Card.Text>This is some text within a card body. What will happen if I make this longer?</Card.Text>
//                         </Card>
//                     </Col>

//                     <Col>
//                         <h1>Other</h1>
//                         <Card style={{ width: '18rem', textAlign: "left" }}>
//                             <Card.Text>This is some text within a card body. What will happen if I make this longer?</Card.Text>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default ColumnsApp;