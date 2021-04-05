import React from "react";
import PokemonContainer from "../components/PokemonContainer";
import { useSelector, shallowEqual } from "react-redux";

import Popup from "../components/Popup";

export default function Home() {
  const { popupOpen } = useSelector(
    (state) => ({
      popupOpen: state.pokemonsDetails.popupOpen,
    }),
    shallowEqual
  );

  return (
    <div>
      {popupOpen && <Popup />}
      <PokemonContainer />
    </div>
  );
}
