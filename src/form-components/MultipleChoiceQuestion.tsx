import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, changeSelection] = useState<string>(options[0]);
    return (
        <div>
            <Form.Group>
                <Form.Label>Select Your Answer:</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(event: ChangeEvent) =>
                        changeSelection(event.target.value)
                    }
                >
                    {options.map(
                        (answer: string): JSX.Element => (
                            <option key={answer} value={answer}>
                                {answer}
                            </option>
                        )
                    )}
                </Form.Select>
            </Form.Group>
            {selected === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
