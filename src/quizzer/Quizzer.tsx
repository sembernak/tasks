import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "./Quiz";

const INTITALQUIZ = [
    <Quiz key="1"></Quiz>,
    <Quiz key="2"></Quiz>,
    <Quiz key="3"></Quiz>
];

export function Quizzer(): JSX.Element {
    const [quizList, editList] = useState<JSX.Element[]>(INTITALQUIZ);

    return (
        <div>
            {quizList}
            <Button
                onClick={() => editList([...quizList, <Quiz key="4"></Quiz>])}
            >
                Add Quiz
            </Button>
        </div>
    );
}
