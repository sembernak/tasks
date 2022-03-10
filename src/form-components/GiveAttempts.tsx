import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [attemptsReq, changeAttemptsReq] = useState<number>(0);
    const [attempts, changeAttempts] = useState<number>(3);

    function submitAttempts() {
        changeAttempts(attempts + attemptsReq);
    }

    return (
        <div>
            <p>Attempts left: {attempts}</p>
            <Form.Group controlId="attemptsBox">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: ChangeEvent) =>
                        changeAttemptsReq(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button onClick={submitAttempts}>gain</Button>
            <Button
                onClick={() => changeAttempts(attempts - 1)}
                disabled={attempts < 1}
            >
                use
            </Button>
        </div>
    );
}
