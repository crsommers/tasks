import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Christmas" | "Halloween" | "Thanksgiving" | "Easter" | "St. Patrick's Day";

const nextAlpha = (holiday: Holiday) => {
    switch (holiday) {
        case "Christmas": return "Easter";
        case "Easter": return "Halloween";
        case "Halloween": return "St. Patrick's Day";
        case "St. Patrick's Day": return "Thanksgiving";
        case "Thanksgiving": return "Christmas";
    }
};

const nextChrono = (holiday: Holiday) => {
    switch (holiday) {
        case "Christmas": return "St. Patrick's Day";
        case "St. Patrick's Day": return "Easter";
        case "Easter": return "Halloween";
        case "Halloween": return "Thanksgiving";
        case "Thanksgiving": return "Christmas";
    }
};

const asEmoji = (holiday: Holiday) => {
    switch (holiday) {
        case "Christmas": return "🎄";
        case "Easter": return "🐣";
        case "Halloween": return "🎃";
        case "St. Patrick's Day": return "🍀";
        case "Thanksgiving": return "🦃";
    }
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    return <div>
        <Button onClick={() => {setHoliday(nextAlpha(holiday))}}>Next Holiday Alphabetically</Button>
        <Button onClick={() => {setHoliday(nextChrono(holiday))}}>Next Holiday Year</Button>
        <span>Holiday: {asEmoji(holiday)}</span>
    </div>;
}
