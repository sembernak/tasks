import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, changeH] = useState<string>("♥️");

    function nextAlph(): void {
        if (holiday === "🎅") {
            changeH("🐰");
        } else if (holiday === "🐰") {
            changeH("🎃");
        } else if (holiday === "🎃") {
            changeH("🥧");
        } else if (holiday === "🥧") {
            changeH("♥️");
        } else {
            changeH("🎅");
        }
    }

    function nextDate(): void {
        if (holiday === "♥️") {
            changeH("🥧");
        } else if (holiday === "🥧") {
            changeH("🐰");
        } else if (holiday === "🐰") {
            changeH("🎃");
        } else if (holiday === "🎃") {
            changeH("🎅");
        } else {
            changeH("♥️");
        }
    }

    return (
        <div>
            <Button onClick={nextAlph}>Advance by Alphabet</Button>
            <Button onClick={nextDate}>Advance by Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
