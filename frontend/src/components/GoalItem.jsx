import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalsSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteGoal(goal._id));
    console.log(`${goal._id} deleted`);
  };
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={handleDelete} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
