import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div className="Card">
      <img className="cardImg" src={"./assets/img/costumes/"+props.article.img} alt={props.article.name}></img>
      <p className='cardTitle'>{props.article.name}</p>
      <p className='cardDesc'>{props.article.description}</p>
      <p className='cardPrice'>{props.article.price}$ - Il reste : {props.article.qte}</p>
      <p className='cardBtn'>
        <button onClick={()=>props.decrementQte(props.article.id)}>
          BUY NOW!</button></p>

    </div>
  )
};


export default Card;
