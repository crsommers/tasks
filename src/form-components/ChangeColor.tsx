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
                        label={<text style={{backgroundColor: c}}>{c}</text>}
                        value={c}
                        checked={color === c}
                    />
                    </label>
                ))
            }
            <p data-testid="colored-box">You have chosen <text style={{backgroundColor: color}}>{color}</text></p>
        </div>
    );
}
