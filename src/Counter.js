import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { incrementCounterAction, INCREMENT_COUNTER } from "./actions";
import "./styles.css";

const Counter = (props) => {
  const count = useSelector((state) => state.count);
  const dispatchRef = useDispatch();
  // const [count, setCount] = useState(0);
  // const { count, dispatch, incrementCounter } = props;

  return (
    <div className="App">
      <h1>React Redux App</h1>
      <h2>Counter app</h2>
      <button onClick={() => dispatchRef(incrementCounterAction)}>{count}</button>
      {/* <button onClick={() => dispatch({ type: INCREMENT_COUNTER })}>{props.count}</button> */}
      {/* <button onClick={() => dispatch(incrementCounterAction)}>{count}</button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = {
  incrementCounter: incrementCounterAction,
}

export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
