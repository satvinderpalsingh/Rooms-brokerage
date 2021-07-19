import React from 'react';
import './Card.css'

function Card({ src, title, description, price, link}) {
    return (
        
            <a className='card' href = {link}>
                
                    <img src={src} alt="" />
                    <div className="card__info">
                        <h2>{title}</h2>
                        <h4>{description}</h4>
                        <h3>{price}</h3>
                    </div>
                
            </a>
        
    )
}

export default Card;