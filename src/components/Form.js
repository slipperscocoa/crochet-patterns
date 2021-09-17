import React, { useState } from 'react';

import { Fab, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function FormApp({ addNote }) {
    const [note, setNote] = useState({
        title: "",
        description: "",
        url: "",
        category: "",
    });

    function clickHandler() {
        addNote(note);

        setNote({
            title: "",
            description: "",
            url: "",
            category: "",
        })
    }

    function changeHandler(event) {
        const { name, value } = event.target;
        setNote(preValues => {
            return {
                ...preValues,
                [name]: value,
            };
        });
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Add New Pattern</h1>
            <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
                <form>
                    <TextField onChange={changeHandler} name="title" value={note.title} label="Title:" fullWidth autoComplete="off" />
                    <TextField onChange={changeHandler} name="description" value={note.description} label="Description:" multiline rows={4} fullWidth autoComplete="off" />
                    <TextField onChange={changeHandler} name="url" value={note.url} label="Url:" fullWidth autoComplete="off" />
                    <TextField onChange={changeHandler} name="category" value={note.category} label="Category:" fullWidth autoComplete="off" />
                    <Fab onClick={clickHandler} style={{ marginTop: "20px", display: "flex" }}><AddIcon /></Fab>
                </form>
            </Paper>
        </div>
    )
}

export default FormApp;