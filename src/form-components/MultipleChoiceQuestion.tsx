import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) { setAnswer(event.target.value) }
    return (
        <div>
            <Form.Group controlId="multipleChoice">
                <Form.Label>This is a mutliple choice question.</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {
                        options.map((option: string) => (
                            <option key={option} value={option}>{option}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <p>{answer === expectedAnswer ? '✔️' : '❌'}{answer}</p>
        </div>
    );
}
