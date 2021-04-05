import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { CLOSE_POPUP_AND_CLEAR_DATA } from "../state/actions/fetchPokemonsDetails";
import DetailsCard from "../components/DetailsCard";
import loadingSvg from "../assets/Spinner.svg";

export default function Popup() {
  const { pokemonDetails, loading } = useSelector(
    (state) => ({
      pokemonDetails: state.pokemonsDetails.data,
      loading: state.pokemonsDetails.loading,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(CLOSE_POPUP_AND_CLEAR_DATA());
  };

  return loading ? (
    <img className="loading-icon" src={loadingSvg} alt="loading" />
  ) : (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__content__close-btn" onClick={closePopup}>
          x
        </div>
        <img
          className="popup__content__image"
          src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
          alt={pokemonDetails.name}
        />
        <DetailsCard
          name={pokemonDetails.name}
          height={pokemonDetails.height}
          weight={pokemonDetails.weight}
        />
      </div>
    </div>
  );
}
