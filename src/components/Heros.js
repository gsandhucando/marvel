import React from "react";

const Heros = ({ name, description, thumbnail, resourceURI }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
        style={{ height: 200, width: 200 }}
      />
    </div>
  );
};

export default Heros;
