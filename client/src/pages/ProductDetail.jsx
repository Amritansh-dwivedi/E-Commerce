import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      const found = res.data.find((p) => p._id === id);
      setProduct(found || {});
    });
  }, [id]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
