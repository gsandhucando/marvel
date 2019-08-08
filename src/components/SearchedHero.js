import React from 'react';
import { Link } from "react-router-dom";

const SearchedHero = ({ name, description, thumbnail, resourceURI, setInputSubmit, inputSubmit }) => {


let setSubmit = () => {
  setInputSubmit(!inputSubmit)
}

  return (
    <div>
      <Link path="/">
      <button onClick={setSubmit}>GO BACK</button>
      </Link>
      <p>{name}</p>
      {/* <p>{description}</p> */}
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
        style={{ height: 200, width: 200 }}
      />
    </div>
  )
}

export default SearchedHero;