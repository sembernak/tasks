import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [currentType, switchType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        if (currentType === "short_answer_question") {
            switchType("multiple_choice_question");
        } else {
            switchType("short_answer_question");
        }
    }

    return (
        <div>
            {<Button onClick={changeType}>Change Type</Button>}
            {currentType === "multiple_choice_question" && (
                <p>Multiple Choice</p>
            )}
            {currentType === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
