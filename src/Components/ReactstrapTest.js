import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import {Jumbotron} from 'reactstrap';
import axios from "axios";



class ReactstrapTest extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                    <Container>
                        <Row>
                            <Col lg={4}>
                               <img src='src\images\pandas.jpg' alt='cant find img'></img>

                            </Col>
                            <Col lg={4}>
                                <div className='info-main'>
                                    <p>
                                        <strong> Dr.Angie Olson</strong>
                                    </p>
                                    <p>
                                        Costumer division Facilitator
                                    </p>
                                    <div className='info-sub'>
                                        <p>Email: Adriana87@hotmail.com</p>
                                        <p>Ip Address: 205.44.63.69</p>
                                        <p>Ip Address: 205.44.63.69</p>
                                        <p>Job Area: Metrics</p>
                                        <p>Job Type: Facilitator</p>
                                    </div>
                                </div>
                                
                                
                            </Col>
                            <Col lg={4}>
                                <div className='Address'>
                                    <p>
                                        <strong>Feest Inc LLC</strong>
                                    </p>
                                    <p>City: Lake Dewayneshire</p>
                                    <p>Country: Lao People;s Democratic Republic</p>
                                    <p>State: Alaska</p>
                                    <p>Street Adress: 218 Hill Viaduct</p>
                                    <p>ZIP: 64894</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p>Dr. Angie Olson</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <p><strong>Friends:</strong></p>
                        <Col lg={12}>
                            <p>List of friends</p>
                        </Col>
                    </Row>
                </Container>
                    
            </div>
        );
    }
}

export default ReactstrapTest;