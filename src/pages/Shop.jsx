import { useNavigate } from 'react-router-dom';
import { categoryProducts } from '../data/categoryProducts';
import { useEffect } from 'react';

const Shop = () => {
  const navigate = useNavigate();

  useEffect(() => {
      navigate(`/tienda/${categoryProducts[0]}`);
  }, [navigate]);

  return null;
}

export default Shop
