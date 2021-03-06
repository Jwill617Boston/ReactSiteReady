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
                        <Col>                        
                            <Navbar className="bg-dark" dark color="primary">                
                            <NavbarBrand href="/">NuCamp</NavbarBrand>                               
                            </Navbar> 
                        </Col>                       
                    </Row>
                </Container>                
                    <Directory campsites={this.state.campsites} />                    
                </div>    
        );
    }
}

export default App;