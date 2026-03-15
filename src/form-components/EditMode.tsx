import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    student; setStudent; name; setName; 

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked)
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked)
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-happy-check"
                label={editing ? "Editing" : "Viewing"}
                checked={editing}
                onChange={updateEditing}
            />
            {
            editing ? 
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={updateName}
                />
                <Form.Check
                    type="switch"
                    id="is-student-check"
                    label={student ? "Student" : "Not a Student"}
                    checked={student}
                    onChange={updateStudent}
                />
            </Form.Group>
            : // NOT EDITING IS BELOW
            <p>{name} is {student ? '' : 'not'} a student</p>}
        </div>
    );
}
