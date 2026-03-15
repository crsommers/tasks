import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("black");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) { setColor(event.target.value); }
    return (
        <div>
            {
                ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black"].map((c: string) => (
                    <label key={c}>
                    <Form.Check
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id={c}
                        label={<span style={{backgroundColor: c}}>{c}</span>}
                        value={c}
                        checked={color === c}
                    />
                    </label>
                ))
            }
            <p>You have chosen <span data-testid="colored-box" style={{backgroundColor: color}}>{color}</span></p>
        </div>
    );
}
