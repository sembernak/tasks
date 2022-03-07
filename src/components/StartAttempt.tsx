import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptsNum, attempt] = useState<number>(4);
    const [taking, reTake] = useState<boolean>(false);

    function takeTest(): void {
        if (!taking) {
            reTake(true);
            attempt(attemptsNum - 1);
        }
    }

    return (
        <div>
            <Button disabled={taking || attemptsNum === 0} onClick={takeTest}>
                Start Quiz
            </Button>
            <div>
                <Button
                    disabled={taking}
                    onClick={
                        !taking
                            ? () => attempt(attemptsNum + 1)
                            : () => attempt(attemptsNum)
                    }
                >
                    Mulligan
                </Button>
                <span>Attempts left: {attemptsNum}</span>
            </div>
            <Button disabled={!taking} onClick={() => reTake(false)}>
                Stop Quiz
            </Button>
        </div>
    );
}
