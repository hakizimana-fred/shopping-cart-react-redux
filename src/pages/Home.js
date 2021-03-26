import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Card, Col, Button } from 'react-bootstrap'

export const Home = () => {

    const products = useSelector(state => state.items)

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} style={{ marginBottom: 12 }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.desc}
                                    <p>{product.price}</p>
                                </Card.Text>

                                <Button variant="primary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
