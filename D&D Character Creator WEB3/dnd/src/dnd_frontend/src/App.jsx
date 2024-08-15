import React, { useState, useEffect } from 'react';
import { dnd_backend } from 'declarations/dnd_backend';
import './App.css';

const DALLE_API_KEY = '-----';

const Ability = {
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0
};

function App() {
  const [imagePrompt, setImagePrompt] = useState('');

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const getRandomNumbersArray = () => {
    const abilityDice = Array.from({ length: 4 }, () => getRandomNumber());
    return abilityDice.sort().reverse();
  };

  const [matrix, setMatrix] = useState(null);
  const [character, setCharacter] = useState({
    img: '',
    name: '',
    race: 'barbarian',
    classes: 'fighter'
  });
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);

  const getImageSource = (number) => {
    return `/images/${number}.png`;
  };

  const getAbilityRank = () => {
    if (!matrix) return null;
    const ranks = matrix.map(row => {
      const sum = row.slice(0, 3).reduce((total, current) => total + current, 0);
      return sum;
    });
    return ranks;
  };

  const handleButtonClick = () => {
    setMatrix(Array.from({ length: 6 }, () => getRandomNumbersArray()));
  };

  const handleNameChange = (event) => {
    setCharacter(prevCharacter => ({ ...prevCharacter, name: event.target.value }));
  };

  const handleRaceChange = (event) => {
    setCharacter(prevCharacter => ({ ...prevCharacter, race: event.target.value }));
  };

  const handleClassChange = (event) => {
    setCharacter(prevCharacter => ({ ...prevCharacter, classes: event.target.value }));
  };

  const addCharacter = async (event) => {
    event.preventDefault();

    const name = character.name;
    const classes = character.classes;
    const race = character.race;
    const abilityRank = getAbilityRank();

    const ability = {
      strength: abilityRank[0],
      dexterity: abilityRank[1],
      constitution: abilityRank[2],
      intelligence: abilityRank[3],
      wisdom: abilityRank[4],
      charisma: abilityRank[5]
    };

    const newCharacter = {
      character_name: name,
      character_classes: classes,
      character_race: race,
      character_ability: ability,
      character_img: character.img
    };

    try {
      await dnd_backend.createCharacter(newCharacter);
      setCurrentCharacter(newCharacter);
      setCharacters(prevCharacters => [...prevCharacters, newCharacter]);
      alert("Karakter başarıyla oluşturuldu!");
    } catch (error) {
      alert("Hata: " + error);
    }
  };

  const requestCharacterImage = async () => {
    const prompt = imagePrompt;
    const options = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${DALLE_API_KEY}`,
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        "prompt": prompt,
        "n": 1,
        "size": "1024x1024"
      })
    };
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', options);
      const data = await response.json();
      const imageUrl = data.data[0].url;

    
      setCharacter(prevCharacter => ({ ...prevCharacter, img: imageUrl }));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllCharacters = async () => {
    let id = 1; 
    let allCharacters = [];
    let isFetching = true;

    while (isFetching) {
      try {
        const characterData = await dnd_backend.readCharacter(id);
        if (characterData) {
          allCharacters.push(characterData);
          id++;
        } else {
          isFetching = false; 
        }
      } catch (error) {
        console.error("Karakter çekilirken bir hata oluştu:", error);
        isFetching = false; 
      }
    }

    setCharacters(allCharacters); 
  };

  return (
    <div className="App">
      <nav className="navbar">
      <div className="navbar-brand">
        <span>D&D KARAKTER OLUŞTURMA</span>
      </div>
    </nav>
      <div className='container1'>
        <div className='container'>
          <div className='imageCreationBox'>
            <input
              type="text"
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
              placeholder="Karakterinizi çizelim :)"
            />
            <button className="button" onClick={requestCharacterImage}>Karakter Resmi Çiz</button>
            <div className='photoBox'>
              {character.img ? <img src={character.img} alt="Karakter Resmi" /> : <p>Resim yüklenene kadar bekleyiniz.</p>}
            </div>
            <div className='characterInfoBox'>
              <input type="text" value={character.name} onChange={handleNameChange} placeholder="Karakter İsmi" />
              <select onChange={handleRaceChange}>
                <option value="human">Human</option>
                <option value="elf">Elf</option>
                <option value="dwarf">Dwarf</option>
                <option value="half-elf">Half-Elf</option>
                <option value="half-orc">Half-Orc</option>
                <option value="halfing">Halfing</option>
                <option value="Gnome">Gnome</option>
              </select>
              <select onChange={handleClassChange}>
               <option value="barbarian">Barbarian</option>
                <option value="bard">Bard</option>
                <option value="cleric">Cleric</option>
                <option value="fighter">Fighter</option>
                <option value="wizard">Wizard</option>
                <option value="rogue">Rogue</option>
                <option value="druid">Druid</option>
                <option value="monk">Monk</option>
                <option value="paladin">Ranger</option>
                <option value="wizard">Wizard</option>
                <option value="sorcerer">Sorcerer</option>
              </select>
              <div className='saveCharacterBox'>
          <button className="button" onClick={addCharacter}>Karakteri Oluştur</button>
        </div>
            </div>
          </div>

          <div className='diceRollBox'>
            <button className="button" onClick={handleButtonClick}>Yetenek Zarlarını At!</button>
            {matrix && <RandDice matrix={matrix} getAbilityRank={getAbilityRank} getImageSource={getImageSource} />}
          </div>
        </div>
       
      </div>
      <div className="characterList">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
    </div>
  );

}

function CharacterCard({ character }) {
  const abilities = character.character_ability ? Object.entries(character.character_ability) : [];

  return (
    <div className='characterCard'>
      <img src={character.character_img} alt={character.character_name} />
      <h3>{character.character_name}</h3>
      <p>Sınıf: {character.character_classes}</p>
      <p>Irk: {character.character_race}</p>
      <div>Yetenekler:</div>
      <ul>
        {abilities.map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  );
}

function RandDice({ matrix, getAbilityRank, getImageSource }) {
  return (
    <div>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((number, columnIndex) => (
            <img key={columnIndex} src={getImageSource(number)} width="75px" alt={`Image ${number}`} />
          ))}
          <p>{getAbilityRank() && getAbilityRank()[rowIndex]}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
