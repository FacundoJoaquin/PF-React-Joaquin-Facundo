import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import Loader from '../Loader'


const ItemDetailContainer = () => {
  let { id } = useParams();
  const [prod, setProd] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setProd(data)
        setLoading(true);
      })
  }, [id])



  return (
    <section className='detail'>
      {loading ? (
        <ItemDetail data={prod} />
        ) : (
        <div className="loader"><Loader /></div>
      )}
    </section>
  );
}

export default ItemDetailContainer;
