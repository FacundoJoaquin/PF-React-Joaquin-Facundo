import * as React from 'react';
import './CardDetail.css'
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton.jsx'

const CardDetail = ({ data }) => {
  return (
    <>
      <h1>Pastelete</h1>
      <div className='detail-container'>
        <div className='img-detail'>
          <img src={data.image} alt="" />
        </div>
        <div className='detail-txt'>
          <h2>{data.title}</h2>
          <div>
            <strong>{data.category}</strong>
            <p>{data.description}</p>
            <p className="price">${data.price}</p>
          </div>
            <Link to="/cart"><Boton /></Link>
        </div>
      </div>
    </>
  )
}


export default CardDetail