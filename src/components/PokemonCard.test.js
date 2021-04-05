import React from "react";
import ReactDom from "react-dom";
import PokemonCard from "./PokemonCard";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

it("takes a pokemon paramters and renders it correctly", () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const container = document.createElement("div");

  ReactDom.render(
    <Provider store={store}>
      <PokemonCard image="pokemon-image" name="pokemon-name" id="pokemon-id" />
    </Provider>,
    container
  );

  const cardBody = container.querySelector(".pokemon-card__body");
  const cardContainer = container.querySelector(".pokemon-card");

  expect(cardBody.textContent).toBe("pokemon-name");
  expect(cardContainer.getAttribute("data-id")).toBe("pokemon-id");
});
