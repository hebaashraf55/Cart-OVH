import React from 'react';
import { items, Item } from '../data/items';

interface ItemListProps {
  addToCart: (item: Item) => void;
}

const ItemList: React.FC<ItemListProps> = ({ addToCart }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h1 className="card-title">{item.name}</h1>
              <p className="card-text">{item.description}</p>
              <p className="card-text">${item.price}</p>
              <button className="btn btn-primary" onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
