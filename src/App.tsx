import React from "react";
import "./App.css";
import {Button, Container, Row, Col} from 'react-bootstrap'

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={ {backgroundColor: 'rgba(0, 54, 162, 1)'}}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <br/>
            <h4> Charles Sommers - Hello World</h4>
            <Button onClick={ () => {
                console.log("Hello World!");
                document.querySelectorAll<HTMLElement>('*').forEach(el => {
                    el.style.transform = `rotate(${Math.random() * 3 - 1}deg)`;  // fun
                    });
            } }>Log Hello World</Button>
            <p></p>
            <Container style={ {border: '1px solid blue', padding: '4px'} }><Row>
                <Col>
                    <div style={ {backgroundColor: 'red', padding: '4px', width: '100%', height: '5px'} }/>
                    This is <span style={ {color: 'mediumseagreen'} }>colored text</span>.
                    <div style={ {backgroundColor: 'red', padding: '4px', width: '100%', height: '5px'} }/>
                </Col>
                <Col>
                    <div style={ {backgroundColor: 'red', padding: '4px', width: '100%', height: '5px'} }/>
                    <img
                        src="https://preview.redd.it/m57ribu65k1f1.jpeg?width=640&crop=smart&auto=webp&s=5072b8045e0e2833d50c9c038a60f0581e0bfd18"
                        alt="A 5/10 meme"
                        width="90%"
                        style={ {border: '8px black solid'} }
                    />
                    <div style={ {backgroundColor: 'red', padding: '4px', width: '100%', height: '5px'} }/>
                </Col>
                <Col>
                    <div style={ {backgroundColor: 'red', padding: '4px', width: '100%', height: '5px'} }/>
                    <p>Some fruit I think are neat</p>
                    <ul>
                        <li>Blood orange</li>
                        <li>Mango</li>
                        <li>Watermelon</li>
                        <li>Pineapple</li>
                    </ul>
                    <div style={ {backgroundColor: 'red', padding: '4px', width: '100%', height: '5px'} }/>
                </Col>
            </Row></Container>
        </div>
    );
}

export default App;
