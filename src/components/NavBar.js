import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

export default function NavBar({ filterSearch }) {

    const [searchValue, setSearchValue] = useState('')

    function onSearch(e) {
        e.preventDefault()
        filterSearch(searchValue)
        setSearchValue('')
    }


    return (
        <div>
            <Row>
                <Navbar expand="lg" bg='dark' >
                    <Container >
                        <Navbar.Brand href="#">
                            <div className='brand-color'>
                                مطعم جديد
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', color: 'white' }}
                                navbarScroll
                            >

                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="أبحث.."
                                    className="mx-2"
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    value={searchValue}
                                />
                                <button onClick={onSearch} className='btn-search'>أبحث</button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </div>
    )
}
