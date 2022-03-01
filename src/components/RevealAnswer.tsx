import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, showAnswer] = useState<boolean>(false);

    function showHide(): void {
        showAnswer(!visible);
    }

    return (
        <div>
            {<Button onClick={showHide}>Reveal Answer</Button>}
            {visible && <div>42</div>}
        </div>
    );
}
