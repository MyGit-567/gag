import React from 'react';
import './Style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Nav,Button,Form,FormControl } from "react-bootstrap";

export default function Navbar() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

