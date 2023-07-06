import React from 'react'
import charizard from '../../assets/404.png'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className='not-found'>
            <p>ERROR 404 <br /> PAGE NOT FOUND</p>
            <img src={charizard} alt="" />
    </div>
  )
}

export default PageNotFound