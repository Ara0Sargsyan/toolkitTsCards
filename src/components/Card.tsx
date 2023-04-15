import React from "react";
import "./Card.css";
import { useAppDispatch } from "../hooks/redux";
import { deleteCard } from "../redux/reducers/cardsReducer";

interface Iprops {
    id: number
}

function Card({ id }: Iprops) {
  const dispatch = useAppDispatch();

  const deleteFnc = () => {
    dispatch(deleteCard(id));
  };

  return (
    <div className="Card">
      {id}
      <span onClick={deleteFnc} className="deleteIcon">X</span>
    </div>
  );
}

export default Card;
