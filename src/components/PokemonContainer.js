import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { FETCH_ALL_POKEMONS } from "../state/actions/fetchPokemons";

import loadingSvg from "../assets/Spinner.svg";

export default function PokemonContainer() {
  const { pokemonsList, loading } = useSelector(
    (state) => ({
      loading: state.pokemons.loading,
      pokemonsList: state.pokemons.data,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FETCH_ALL_POKEMONS());
  }, [dispatch]);

  const currentContainer = loading ? (
    <img className="loading-icon" src={loadingSvg} alt="loading-icon" />
  ) : (
    pokemonsList.map(({ name, sprites, id }, i) => {
      return (
        <PokemonCard
          key={i}
          name={name}
          image={sprites?.other?.dream_world?.front_default}
          id={id}
        />
      );
    })
  );

  return <div className="container">{currentContainer}</div>;
}
