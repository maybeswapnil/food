import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function Getdata(props) {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
  },[])

  const getRecipes = async (props) => {
    const req = await fetch('https://api.edamam.com/search?q=chicken&app_id=4900cd00&app_key=7ddf5323972157d31bb3fa9d3a244e01&from=0&to=3&calories=591-722&health=alcohol-free');
    const data = await req.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };  
      return (
        <div className="App">
          <div className="main">
            <p id="dialogue">Search for: </p><p id="input">{props.input}</p>
          </div>
          <div>
                {recipes.filter((p) => (p.recipe.label.toLowerCase().includes(props.input))).map(recipe => (<Recipe label={recipe.recipe.label} details={recipe.recipe.healthLabels}/>))}
          </div>
          
        </div>
      );
}

export default Getdata;
