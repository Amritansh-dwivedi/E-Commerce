import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../css/Cart.css';

const Cart = () => {
  const { cart } = useContext(AuthContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, idx) => (
              <div key={idx} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h4>Total: ₹{total}</h4>
            <button
              className="checkout-btn"
              onClick={() => alert('Order placed!')}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
