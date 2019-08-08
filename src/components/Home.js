import React, { useEffect, useState } from "react";
import Heros from "./Heros";
import SearchedHero from "./SearchedHero";
import env from "../env.json";
import axios from "axios";
import { Link } from "react-router-dom";

var marvel = {
  publicKey: env.PUBLIC_API_KEY,
  privateKey: env.PRIVATE_KEY,
  hash: env.HASH
};

let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
  marvel.publicKey
}&hash=${marvel.hash}&limit=30`;

const Home = () => {
  let [character, setCharacter] = useState([]);
  let [inputChangeCharacter, setInputChangeCharacter] = useState("");
  let [inputSubmit, setInputSubmit] = useState(false)

  let onChange = event => {
    setInputChangeCharacter(
      event.target.value
        // .replace(" ", "")
        .toLowerCase()
        .trim()
    );
  };

  let handleSubmit = event => {
    setInputSubmit(!inputSubmit)
    event.preventDefault();
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
          marvel.publicKey
        }&hash=${marvel.hash}&name=${inputChangeCharacter}`
      )
      .then(res => {
        console.log(res, "thor");
        setCharacter(res.data.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(inputSubmit)

  useEffect(() => {
    if (character.length === 0) {
      axios.get(url).then(res => {
        // console.log(res.data.data.results);
        setCharacter(res.data.data.results);
      });
    }
  }, []);

  let hero = character.map(char => <Heros key={char.id} {...char} />);
  let searchHero = character.map(char => <SearchedHero key={char.id} {...char} setInputSubmit={setInputSubmit} inputSubmit={inputSubmit}/>);

  return (
    <>
    { inputSubmit ? <Link path="/hero">{searchHero}</Link> :
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter a Super Hero" onChange={onChange} />
        <input type="submit" value="ENTER HERO" />
      </form>
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly'}}>{hero}</div>
    </div>
    }
    </>
  );
};

export default Home;
