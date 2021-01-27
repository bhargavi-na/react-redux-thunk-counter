import { countService } from "./countService";

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// export const incrementCounterAction = async (dispatch) => {
//   const newCount = await countService();
//   dispatch({
//     type: INCREMENT_COUNTER,
//     // payload: newCount
//   });
// };

export const incrementCounterAction = async (dispatch) => {
  const newCount = await countService();
  dispatch({
    type: INCREMENT_COUNTER,
    payload: newCount,
    expression: "Hi",
  });
};

// action creator
// export const incrementCounterAction = () => ({
//   // const newCount = await countService();
//   type: INCREMENT_COUNTER,
//   // payload: newCount
// });

// export const decremenetCounterAction = () => ({
//   type: DECREMENT_COUNTER,
// });
