import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptsNum, attempt] = useState<number>(4);
    const [taking, reTake] = useState<boolean>(false);

    function takeTest(): void {
        reTake(true);
        attempt(attemptsNum - 1);
    }

    return (
        <div>
            {!taking && attemptsNum > 0 && (
                <Button onClick={takeTest}>Start Quiz</Button>
            )}
            {!taking && (
                <Button onClick={() => attempt(attemptsNum + 1)}>
                    Mulligan
                </Button>
            )}
            {taking && <Button onClick={() => reTake(false)}>Stop Quiz</Button>}
        </div>
    );
}
