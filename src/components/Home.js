import React, { useEffect, useState } from "react";
import Heros from "./Heros";
// import SearchedHero from "./SearchedHero";
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
  let [failedSearch, setFailedSearch] = useState(false);

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
        if (res.data.data.results && res.data.data.results.length > 0) {
          setCharacter(res.data.data.results[0]);
          setFailedSearch(false)
        } else {
          setCharacter({})
          setFailedSearch(true)
        }
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

  let hero = Object.keys(character).length > 0 ? <Heros key={character.id} {...character} /> : null;
  let searchHero = savedCharacter.map(char => (
    <Heros
      key={char.id}
      {...char}
    />
  ));

  return (
    <>
      {Object.keys(character).length > 0 ? (
        hero
      ) : (
        <div className="home-container">
          { failedSearch ?
          <h1>Hero not found please try again</h1>
          : null
          }
          <form onSubmit={handleSubmit}>
            <input className='home-input' placeholder="Enter a Super Hero" onChange={onChange} />
            <input className='home-input-btn' type="submit" value="ENTER HERO" />
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
