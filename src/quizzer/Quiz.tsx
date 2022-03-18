import React, { useState } from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function Quiz(): JSX.Element {
    const [editMode, switchMode] = useState<boolean>(false);
    const [title, editTitle] = useState<string>("Add Title");
    const [desc, editDesc] = useState<string>("Add Description");

    function handleTitle(event: ChangeEvent) {
        editTitle(event.target.value);
    }

    function handleDesc(event: ChangeEvent) {
        editDesc(event.target.value);
    }

    return (
        <div>
            {!editMode && <h1>{title}</h1>}
            {!editMode && (
                <Button onClick={() => switchMode(true)}>Edit</Button>
            )}
            {!editMode && <p>{desc}</p>}
            {editMode && (
                <FormGroup>
                    <FormLabel>Edit Title</FormLabel>
                    <Form.Control value={title} onChange={handleTitle} />
                </FormGroup>
            )}
            {editMode && (
                <FormGroup>
                    <FormLabel>Edit Description</FormLabel>
                    <Form.Control value={desc} onChange={handleDesc} />
                </FormGroup>
            )}
            {editMode && (
                <Button onClick={() => switchMode(false)}>Stop Editing</Button>
            )}
        </div>
    );
}
