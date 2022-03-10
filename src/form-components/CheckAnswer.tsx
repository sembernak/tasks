// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [answer, setAnswer] = useState<string>("");

    function handleUpdate(event: ChangeEvent) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="answerForm">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control value={answer} onChange={handleUpdate} />
            </Form.Group>
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
