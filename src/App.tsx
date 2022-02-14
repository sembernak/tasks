import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>
                samuel bernal<br></br>Hello World
            </p>
            <div>
                <h1>This is the start of task 3 stuff</h1>
                <img
                    src="https://i2.wp.com/www.australiangeographic.com.au/wp-content/uploads/2021/08/echidna-train.jpg?resize=2048%2C1170&ssl=1"
                    alt="This is a picture of an echidna train"
                    style={{ width: "30%" }}
                />
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="redRect"></div>
                        <ul>
                            <li>One Item</li>
                            <li>Another Item</li>
                            <li>And a third</li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="redRect"></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
