import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../env.json";
import DisplayHeroInfo from "./DisplayHeroInfo";

var marvel = {
  publicKey: env.PUBLIC_API_KEY,
  privateKey: env.PRIVATE_KEY,
  hash: env.HASH
};

const Hero = props => {
  let [heroInfo, setHeroInfo] = useState([]);
  // let [undefinedHero, setUndefinedHer0] = useState=('Hero doesnt exist please try again')

  console.log(props.match);

  useEffect(() => {
    // if (props.match.id !== undefined) {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters/${
          props.match.params.id
        }?ts=1&apikey=${marvel.publicKey}&hash=${marvel.hash}`
      )
      .then(response => {
        setHeroInfo(response.data.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    // }
  }, []);

  let mappedHero = heroInfo.map(hero => {
    console.log(hero);
    return <DisplayHeroInfo key={hero.id} {...hero} />;
  });
  return <div style={{ zIndex: "9" }}>{mappedHero}</div>;
};

export default Hero;
