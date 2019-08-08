import React, { useEffect, useState } from "react";
import Heros from "./Heros";
import env from "../env.json";
import axios from "axios";

var marvel = {
  publicKey: env.PUBLIC_API_KEY,
  privateKey: env.PRIVATE_KEY,
  hash: env.HASH
};

let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
  marvel.publicKey
}&hash=${marvel.hash}&limit=3`;

const Home = () => {
  let [character, setCharacter] = useState([]);
  let [inputChangeCharacter, setInputChangeCharacter] = useState("");

  let onChange = event => {
    setInputChangeCharacter(
      event.target.value
        // .replace(" ", "")
        .toLowerCase()
        .trim()
    );
  };

  let handleSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
          marvel.publicKey
        }&hash=${marvel.hash}&limit=3&name=${inputChangeCharacter}`
      )
      .then(res => {
        console.log(res, "thor");
        setCharacter(res.data.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (character.length === 0) {
      axios.get(url).then(res => {
        // console.log(res.data.data.results);
        setCharacter(res.data.data.results);
      });
    }
  }, []);

  let hero = character.map(char => <Heros key={char.id} {...char} />);

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter a Super Hero" onChange={onChange} />
        <input type="submit" value="ENTER HERO" />
      </form>
      <div>{hero}</div>
    </div>
  );
};

export default Home;
