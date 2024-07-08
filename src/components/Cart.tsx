import React from 'react';
import { Item } from '../data/items';

interface CartItem extends Item {
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (item: Item) => void;
  clearCart: () => void;
  calculateTotal: () => number;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart, clearCart, calculateTotal }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <span>{item.name}</span>
                <span> x {item.quantity}</span>
              </div>
              <div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
      <button className="btn btn-warning mt-3" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
