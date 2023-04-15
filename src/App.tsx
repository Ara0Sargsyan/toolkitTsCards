import React from "react";
import "./App.css";
import Card from "./components/Card";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { cardsType } from "./types";
import { createCard, sortCards } from "./redux/reducers/cardsReducer";

function App() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cardsReducer.cards);

  const createCardFnc = () => {
    dispatch(createCard());
  }
  
  const sortCardFnc = () => {
    dispatch(sortCards());
  }

  return (
    <div className="App">
      <header>
        <div className="btns-wrapper">
          <button
            onClick={createCardFnc}
            className="btn"
          >
            create card
          </button>
          <button
            onClick={sortCardFnc}
            className="btn"
          >
            sort cards
          </button>
        </div>
      </header>
      <div className="wrapper">
        {cards.map((el: cardsType) => {
          return <Card key={el.id} id={el.id} />;
        })}
      </div>
      <div className="informationTable">
        Press the "add card" button to add the new Card. Use the "sort cards"
        button to sort the Cards by the increase. Press an X icon on the top
        right to delete them.
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
