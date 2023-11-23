import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Gallery.css';

const Gallery = (props) => (
  <div className="Gallery">
    {
      props.articles.map((value, index) => (
        <Card key={index} article={value}></Card>
      ))
    }
  </div>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
