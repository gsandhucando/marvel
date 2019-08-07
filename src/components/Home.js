import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import api from 'marvel-api';
import Heros from './Heros';
import env from "../env.json";



var marvel = api.createClient({
  publicKey: env.PUBLIC_API_KEY,
  privateKey: env.PRIVATE_KEY
});


const Home = () => {
  let [character, setCharacter] = useState([]);

  let onChange = (event) => {
    let input = event.target.value.replace(' ', '').toLowerCase().trim();
    console.log(input)

  }

  useEffect(() => {
    if (character.length === 0) {
    marvel.characters.findAll(3)
    .then(res => {
      console.log(res.data)
      setCharacter(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  }, [])

  console.log(character.name)

  let image = character.map(img => {
    return <img src={`${img.thumbnail.path}.${img.thumbnail.extension}`} />
   })

  let hero = character.map((char) =>
  <Heros key={char.id} {...char}  />
  )



  return (
    <div>
      <input placeholder='Enter a Super Hero' onChange={onChange} />
      <div>
        {hero}
      </div>
    </div>
  )
}

export default Home;