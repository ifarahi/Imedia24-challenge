import React from "react";
import { useDispatch } from "react-redux";
import { FETCH_POKEMON_DETAILS } from "../state/actions/fetchPokemonsDetails";

export default function PokemonCard({ image, name, id }) {
  const dispatch = useDispatch();

  const getPokemonDetails = ({ currentTarget }) => {
    dispatch(FETCH_POKEMON_DETAILS(currentTarget.getAttribute("data-id")));
  };

  return (
    <div className="pokemon-card" onClick={getPokemonDetails} data-id={id}>
      <img className="pokemon-card__image" src={image} alt={`${name}`} />
      <div className="pokemon-card__body">{name}</div>
    </div>
  );
}
