import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./../slice/counterSlice";

function Counter(props) {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("STORE value: ", value);

  const _increment = () => {
    dispatch(increment());
  };
  const _decrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Counter: {value}</h1>
      <button onClick={_increment}>Increment</button>
      <button onClick={_decrement}>Decrement</button>
      {/* input */}
      {/* button Add */}
    </>
  );
}

export default Counter;
