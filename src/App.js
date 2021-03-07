import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponents'
import { CAMPSITES } from './shared/campsites';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    };

    render() {
        return (
            <div className="App">
                <Container fluid>                                   
                        <Row>
                            <Navbar className="bg-dark col" dark color="primary">                
                            <NavbarBrand href="/">NuCamp</NavbarBrand>                               
                            </Navbar>
                        </Row>                   
                        <Directory campsites={this.state.campsites} />
                </Container>                               
            </div>    
        );
    }
}

export default App;