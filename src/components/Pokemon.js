import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const typeColorsBackground = {
  normal: "rgb(164,172,175)",
  water: "rgba(69,146,196, 0.8)",
  fire: "rgba(253,125,36, 0.6)",
  grass: "rgba(155,204,80, 0.8)",
  bug: "rgba(114,159,63, 0.8)",
  poison: "rgba(185,127,201, 0.8)",
  electric: "rgb(238,213,53)",
  ground: "linear-gradient(0deg,rgb(171,152,66) 50%, rgb(247,222,63) 50%)",
  fairy: "rgb(253,185,233)",
  "flying": "linear-gradient(0deg, rgb(189,185,184) 50%, rgb(61,199,239) 50%)",
  "fighting": "rgb(213,103,35)",
  "rock": "rgb(163,140,33)",
  "psychic": "rgb(243,102,185)",
  "ice":"rgb(81,196,231)",
  "ghost": "rgb(123,98,163)",
  "steel": "rgb(158,183,184)",
  "dragon": "linear-gradient(0deg, rgb(240,110,87) 50%, rgb(83,164,207) 50%)",
  "dark": "rgb(112,112,112)",
};

const typeColor = {
  grass: "black",
  fairy: "black",
  electric: "black",
  normal: "black",
  flying: "black",
  ice: "black",
}

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍";
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((pokemon, index) => {
              return (
                <div key={index} className="pokemon-type-text" style={{
                  background: typeColorsBackground[pokemon.type.name] ?? "white",
                  color: typeColor[pokemon.type.name] ?? "white",
                  fontSize: "14px",
                }}>
                  {pokemon.type.name}
                </div> 
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
