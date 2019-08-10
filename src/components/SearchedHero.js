import React from 'react';
import { Link } from "react-router-dom";

const SearchedHero = (props) => {

let setSubmit = () => {
  props.setInputSubmit(!props.inputSubmit)
}

  return (
    <div>
      <Link path="/">
      <button onClick={setSubmit}>GO BACK</button>
      </Link>
      <p>{props.name}</p>
      <img
        src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
        alt={props.name}
        style={{ height: 200, width: 200 }}
      />
    </div>
  )
}

export default SearchedHero;