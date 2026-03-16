import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");
    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) { setRequested(String(event.target.value)) }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formMovieReleased">
            <Form.Label>Attempts {remaining}</Form.Label>
            <Form.Control
                type="number"
                value={requested}
                onChange={updateRequested}
            />
            </Form.Group>
            <Button disabled={remaining === 0} onClick={() => {setRemaining(remaining-1)}}>use</Button>
            <Button onClick={() => {setRemaining(remaining+(parseInt(requested) || 0))}}>gain</Button>
        </div>
    );
}
