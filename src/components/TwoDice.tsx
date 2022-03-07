import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, left] = useState<number>(1);
    const [rightDie, right] = useState<number>(2);

    function assessWin(): boolean {
        return leftDie !== 1;
    }

    return (
        <div>
            <Button onClick={() => left(d6())}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>
            <br></br>
            <Button onClick={() => right(d6())}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            <br></br>
            {leftDie === rightDie && assessWin() && <span>Win</span>}
            {leftDie === rightDie && !assessWin() && <span>Lose</span>}
        </div>
    );
}
