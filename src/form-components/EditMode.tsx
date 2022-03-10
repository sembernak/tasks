import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [editMode, switchMode] = useState<boolean>(false);
    const [name, changeName] = useState<string>("Your Name");
    const [studentVal, changeEnrollment] = useState<boolean>(true);

    return (
        <div>
            {editMode ? (
                <div>
                    <Form.Group>
                        <Form.Label>Edit:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event: ChangeEvent) =>
                                changeName(event.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student"
                        label="Student?"
                        checked={studentVal}
                        onChange={(event: ChangeEvent) =>
                            changeEnrollment(event.target.checked)
                        }
                    />
                </div>
            ) : (
                <p>
                    {name} is {studentVal ? "a" : "not a"} student
                </p>
            )}
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event: ChangeEvent) =>
                    switchMode(event.target.checked)
                }
            />
        </div>
    );
}
