import React from "react";
import ReactDom from "react-dom";
import DetailsCard from "./DetailsCard";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

it("takes a pokemon details and renders it correctly", () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const container = document.createElement("div");

  ReactDom.render(
    <Provider store={store}>
      <DetailsCard
        height="pokemon-height"
        name="pokemon-name"
        weight="pokemon-weight"
      />
    </Provider>,
    container
  );

  const cardName = container.querySelector(".card-name");
  const cardHeight = container.querySelector(".card-height");
  const cardWeight = container.querySelector(".card-weight");

  expect(cardName.textContent).toBe("Namepokemon-name");
  expect(cardHeight.textContent).toBe("Hieghtpokemon-height");
  expect(cardWeight.textContent).toBe("Weightpokemon-weight");
});
