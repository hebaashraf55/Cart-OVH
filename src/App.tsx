import React from 'react';
import Cart from './Cart';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Cart</h1>
      </header>
      <main>
        <Cart />
      </main>
    </div>
  );
};

export default App;
