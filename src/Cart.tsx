import React, { useState } from 'react';
import { Button, ListGroup, Container, Row, Col } from 'react-bootstrap';

type CartItem = {
  id: number;
  name: string;
  price: number;
};

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [nextId, setNextId] = useState(1);

  const addItem = () => {
    const newItem: CartItem = { id: nextId, name: `Item ${nextId}`, price: Math.floor(Math.random() * 100) + 1 };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Button onClick={addItem}>Add Item</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {items.map(item => (
              <ListGroup.Item key={item.id}>
                {item.name} - ${item.price}
                <Button variant="danger" className="float-end" onClick={() => removeItem(item.id)}>Remove</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
