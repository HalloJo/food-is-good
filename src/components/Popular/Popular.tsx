import React, { useEffect, useState } from "react";
import { Recipes } from "../../types";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getRandomRecipes = async (): Promise<any | never> => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_FOOD_API_KEY
      }&number=10`
    );
    const data = await api.json();
    console.log(data);

    setPopular(data.recipes);
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <>
      <h1>Popular recipes</h1>
      {popular.map((recipe, index) => {
        <div key={index}>
          <h3>{recipe.title}</h3>
        </div>;
      })}
    </>
  );
};

export default Popular;
