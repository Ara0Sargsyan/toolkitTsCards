import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardsType } from "../../types";

const initialState: IinitialState = {
  cards: [],
};

interface IinitialState {
  cards: cardsType[];
}

export const CardsSlice = createSlice({
  name: "Cards",
  initialState,
  reducers: {
    createCard(state) {
      const generateId = () => {
        let randomNumber: number;
        let filteredCards;
        do {
          randomNumber = Math.floor(Math.random() * 1000);
          filteredCards = state.cards.filter((el) => el.id === randomNumber);
        } while (filteredCards.length);
        return randomNumber;
      };

      state.cards = [
        ...state.cards,
        {
          id: generateId(),
        },
      ];
    },
    deleteCard(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    sortCards(state) {
      state.cards = state.cards.sort((a, b) => a.id - b.id);
    },
  },
});

export default CardsSlice.reducer;
export const { deleteCard, createCard, sortCards } = CardsSlice.actions;
