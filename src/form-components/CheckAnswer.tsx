import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [given, setGiven] = useState<string>("");
    function updateGiven(event: React.ChangeEvent<HTMLInputElement>) { setGiven(event.target.value) }
    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Your answer:</Form.Label>
                <Form.Control
                    type="text"
                    size='sm'
                    value={given}
                    onChange={updateGiven}
                />
            </Form.Group>
            <p>{given === expectedAnswer ? '✔️' : '❌'}{given}</p>
        </div>
    );
}
