import React, { useState } from 'react';
import ItemList from './components/ItemsList';
import Cart from './components/Cart';
import { Item } from './data/items';

interface CartItem extends Item {
  quantity: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: Item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevItems.filter((i) => i.id !== item.id);
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container">
      <h1 className="my-4">E-commerce Project</h1>
      <div className="row">
        <div className="col-md-8">
          <ItemList addToCart={addToCart} />
        </div>
        <div className="col-md-4">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} calculateTotal={calculateTotal} />
        </div>
      </div>
    </div>
  );
};

export default App;
