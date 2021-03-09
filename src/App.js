import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    };
}

export default App;