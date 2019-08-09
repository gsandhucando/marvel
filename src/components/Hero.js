import React, { useEffect } from "react";
import axios from "axios";
import env from "../env.json";

var marvel = {
  publicKey: env.PUBLIC_API_KEY,
  privateKey: env.PRIVATE_KEY,
  hash: env.HASH
};

let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
  marvel.publicKey
}&hash=${marvel.hash}&limit=3`;

const Hero = props => {
  console.log(props.match);
  //axios call seach with id u get from props.match
  //GET /v1/public/characters/{characterId}
  return <div>hero</div>;
};

export default Hero;
