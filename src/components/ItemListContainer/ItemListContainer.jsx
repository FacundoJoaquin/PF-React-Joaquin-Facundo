import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Swal from 'sweetalert2';
import Loader from '../Loader';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  const errorFetching = () => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      text: 'Error, no se pudo cargar los productos',
      showConfirmButton: true,
    });
  };

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url += `?category=${category}`;
    }

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setProducts(data);
        setLoaded(true);
      })
      .catch(error => {
        errorFetching(error);
      });
  }, [category]);

  useEffect(() => {
    if (category && products.length > 0) {
      const filteredProducts = products.filter(
        prod => prod.category === category
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  return (
    <div className='ilc'>
      <h2>Nuestros productos</h2>
      <div className='card-container'>
        {loaded ? (
          filteredProducts.map(product => (
            <div className='card' key={product.id}>
              <ItemList data={product} />
            </div>
          ))
        ) : (
          <div className='loader'>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
