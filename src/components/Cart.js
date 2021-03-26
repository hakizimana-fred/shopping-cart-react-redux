import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { removeFromCart } from '../Redux/actions/productsActions'


export const Cart = () => {
    const myitems = useSelector(state => state.addedItems)
    const total = useSelector(state => state.total)
    const dispatch = useDispatch()

    const cartItems = () => {
        if (myitems.length > 0) {
            return (
                <Container>

                    <Row>
                        {myitems.map(product => (
                            <Col md={3} key={product.id}>
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
                                        <Card.Text>
                                            <b> Quantity: {product.quantity}</b>
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => dispatch(removeFromCart(product.id))}>Remove</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <Col md={4}>
                            <Card>
                                <Card.Header as="h5">Total</Card.Header>
                                <Card.Body>
                                    <Card.Title>Amount to pay</Card.Title>
                                    <Card.Text>
                                        $ {total}
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>
            )
        }
        return (
            <Container>
                <h1>Nothing is in the cart</h1>
            </Container>
        )
    }

    return (
        <>
            {cartItems()}
        </>
    )
}
