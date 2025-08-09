import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Home.css'; // custom CSS

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} className="product-image" />
            <h3 className="product-name">{p.name}</h3>
            <p className="product-price">₹{p.price}</p>
            <Link to={`/product/${p._id}`} className="view-btn">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
