import React, { useEffect, useState } from "react";
import Heros from "./Heros";
import SearchedHero from "./SearchedHero";
import env from "../env.json";
import axios from "axios";

var marvel = {
  publicKey: env.PUBLIC_API_KEY,
  privateKey: env.PRIVATE_KEY,
  hash: env.HASH
};

let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
  marvel.publicKey
}&hash=${marvel.hash}&limit=25`;

const Home = () => {
  let [character, setCharacter] = useState({});
  let [savedCharacter, setSavedCharacter] = useState([]);
  let [inputChangeCharacter, setInputChangeCharacter] = useState("");

  let onChange = event => {
    setInputChangeCharacter(event.target.value.toLowerCase().trim());
  };

  let handleSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
          marvel.publicKey
        }&hash=${marvel.hash}&name=${inputChangeCharacter}`
      )
      .then(res => {
        setCharacter(res.data.data.results[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(url).then(res => {
      setSavedCharacter(res.data.data.results);
    });
  }, []);

  let hero = <Heros key={character.id} {...character} />;
  let searchHero = savedCharacter.map(char => (
    <Heros
      key={char.id}
      {...char}
    />
  ));

    console.log(character)

  return (
    <>
      {Object.keys(character).length > 0 ? (
        hero
      ) : (
        <div className="home-container">
          <form onSubmit={handleSubmit}>
            <input placeholder="Enter a Super Hero" onChange={onChange} />
            <input type="submit" value="ENTER HERO" />
          </form>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-evenly"
            }}
          >
            {searchHero}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
