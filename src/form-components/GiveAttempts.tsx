import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
        </div>
    );
}
