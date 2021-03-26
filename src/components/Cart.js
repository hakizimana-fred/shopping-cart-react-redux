import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


export const Cart = () => {
    const myitems = useSelector(state => state.addedItems)

    const cartItems = () => {
        if (myitems.length > 0) {
            return (
                <Container>
                    <Row>
                        {myitems.map(product => (
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
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
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
