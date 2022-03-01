import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, showAnswer] = useState<boolean>(false);

    function showHide(): void {
        showAnswer(!visible);
    }

    return (
        <div>
            <Button onClick={showHide}>Show Answer</Button>
            {visible && <p>42</p>}
        </div>
    );
}
