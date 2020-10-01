import React from 'react';
import './Style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Nav ,Button,Form,FormControl } from "react-bootstrap";

export default function NavbarSomeText() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Home</Navbar.Brand> 
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Menu</Nav.Link>
                    <Nav.Link href="#features">Call</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                    </Navbar> 
                </div>
            </div>
        </div>
    );
}


