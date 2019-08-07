import React from 'react';

const Heros = ({name, description, thumbnail, resourceURI}) => {

  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} style={{height: 100, width: 100}}/>
    </div>
  )
}

export default Heros;