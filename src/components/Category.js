import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Roll } from 'react-reveal'

export default function Category({ filtercategory, categories }) {

    function onFilter(cat) {
        filtercategory(cat)
    }

    return (
        <Row className='my-5'>
            <Col sm='12' className='d-flex justify-content-center'>
                <Roll >
                    {
                        categories.map((item, index) => {
                            return (
                                <div key={index}>
                                    <button onClick={() => onFilter(item)} className='btn mx-2'>{item}</button>
                                </div>
                            )
                        })
                    }
                </Roll>
            </Col>
        </Row>
    )
}
