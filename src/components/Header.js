import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Header() {
    return (
        <Row>
            <Col sm='12' className='justify-content-center text-center'>
                <div className='title'>قائمة الطعام</div>
            </Col>
        </Row>
    )
}
