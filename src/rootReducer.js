import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actions";

const initialState = {
  count: 13,
  name: "jhdwe",
  course: "kehjdfekw",
  names: ["dbe", "chdc", "djbhe"],
};

const rootReducer = (state, action) => {
  console.log("action: ", action);
  console.log("state: ", state);
  switch (action.type) {
    case INCREMENT_COUNTER:
      // return { count: 5};["a"]
      // return { count: state.count + 1 };
      // const names = ["a", "b", "c"];
    return { ...state, count: action.payload, expression: action.expression };
    case DECREMENT_COUNTER:
      // return { count: 5};
      return { count: state.count - 1 };
    // return { count: action.payload };
    default:
      return initialState;
  }
};

export default rootReducer;
