import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [colorval, changeColor] = useState<string>(COLORS[0]);

    return (
        <div>
            {COLORS.map(
                (color: string): JSX.Element => (
                    <Form.Check
                        inline={true}
                        key={color}
                        type="radio"
                        label={color}
                        style={{ backgroundColor: color }}
                        value={color}
                        checked={colorval === color}
                        onChange={(event: ChangeEvent) =>
                            changeColor(event.target.value)
                        }
                    />
                )
            )}
            <br></br>
            <span>
                You have chosen:{" "}
                <p
                    data-testid="colored-box"
                    style={{ backgroundColor: colorval }}
                >
                    {colorval}
                </p>
            </span>
        </div>
    );
}
