import React from "react";
import { Link } from "react-router-dom";

const Heros = ({ name, description, thumbnail, resourceURI, id }) => {
  console.log(thumbnail)
  return (
    <div>
      <Link to={`/hero/${id}`}>
      <p>{name}</p>
      { thumbnail ?
      <img
      src={`${thumbnail.path}.${thumbnail.extension}`}
      alt={name}
      style={{ height: 200, width: 200 }}
      />
      : null
    }
      </Link>
    <p>{description}</p>
    </div>
  );
};

export default Heros;
