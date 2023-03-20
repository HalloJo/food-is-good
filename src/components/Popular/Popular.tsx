import React, { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getRandomRecipes = async () => {
    const API_KEY = import.meta.env.VITE_FOOD_API_KEY;

    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
    );
    const data = await api.json();
    console.log(data);

    setPopular(data.recipes);
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return <div>Popular</div>;
};

export default Popular;
