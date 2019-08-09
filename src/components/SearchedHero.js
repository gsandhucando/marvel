import React from 'react';
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Get the current location.
const location = history.location;

const SearchedHero = (props) => {


  // { name, description, thumbnail, resourceURI, setInputSubmit, inputSubmit, comics,  }

let setSubmit = () => {
  props.setInputSubmit(!props.inputSubmit)
}
console.log(location)

  return (
    <div>
      <Link path="/">
      <button onClick={setSubmit}>GO BACK</button>
      </Link>
      <p>{props.name}</p>
      {/* <p>{description}</p> */}
      <img
        src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
        alt={props.name}
        style={{ height: 200, width: 200 }}
      />
      {/* {comicbooks} */}
    </div>
  )
}

export default SearchedHero;