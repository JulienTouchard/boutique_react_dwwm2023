import React from 'react';

import './ListMenu.css';

const ListMenu = (props) => {
  return (
    <ul className="ListMenu">
      {
        props.sendEntries.map((value, index) => {
          
          return (
              <li 
                /* un event ne peut pas être directement conditionné */
                onClick={
                 value.entry === "Panier" ? props.handleDisplayPanier : null
                }
              key={index}>{value.entry}</li>
          )
        })
      }
    </ul>
  )
};



export default ListMenu;
