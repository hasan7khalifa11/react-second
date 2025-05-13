import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'

export default function ItemList({ items }) {
    return (
        <Row>
            <Zoom>
                {
                    items.length > 0 ? (
                        items.map((item, index) => {
                            return (
                                <Col sm='12' className='mb-3' key={index}>
                                    <Card className='d-flex flex-row' style={{ backgroundColor: '#f8f8f8' }}>
                                        <Card.Img className='img-item' variant="top" src={item.imgurl} />
                                        <Card.Body>
                                            <Card.Title className='d-flex justify-content-between my-1'>
                                                <div className='item-title'>{item.title}</div>
                                                <div className='item-price'>{item.price}</div>
                                            </Card.Title>
                                            <Card.Text className='py-3'>
                                                <div className='item-description'>
                                                    {item.description}
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    ) : (
                        <h2 className='text-center'>لا يوجد وصفات</h2>
                    )
                }
            </Zoom>
        </Row>
    )
}
