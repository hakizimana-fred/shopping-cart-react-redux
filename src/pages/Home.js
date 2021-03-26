import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Card, Col, Button } from 'react-bootstrap'
import { addToCart } from '../Redux/actions/productsActions'

export const Home = () => {

    const products = useSelector(state => state.items)
    const dispatch = useDispatch()

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id}>
                        <Card style={{ width: '18rem' }} style={{ marginBottom: 12 }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.desc}
                                </Card.Text>

                                <Card.Text>
                                    <b>$ {product.price}</b>
                                </Card.Text>
                                <Button variant="primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
