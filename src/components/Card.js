import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DeleteIcon from "@material-ui/icons/Delete";

function CardApp({ title, description, url, category, id, delNote }) {
    function clickHandler() {
        delNote(id);
    }
    
    return (
        <div>
            <Card style={{ width: '18rem', textAlign: "left" }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{url}</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    <Button onClick={clickHandler}><DeleteIcon /></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardApp;