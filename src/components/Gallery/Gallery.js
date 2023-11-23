import React from 'react';
import Card from '../Card/Card';
import './Gallery.css';

const Gallery = (props) => (
  <div className="Gallery">
    {
      props.articles.map((value, index) => (
        <Card key={index} article={value} decrementQte={props.decrementQte}></Card>
      ))
    }
  </div>
);

export default Gallery;
