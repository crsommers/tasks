import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [hidden, setHidden] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => {setHidden(!hidden)}}>Reveal Answer</Button>{hidden ? "42" : "*******"}
        </div>
    );
}
