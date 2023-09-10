import { useState } from "react";

export default function Counter() {
    const [value, setValue] = useState(0);
  
    // var onIncrement = () => {
    //   console.log("Before", value);
    //   setValue(value + 1);
    //   console.log("After", value);
    // };
    var onDecrement = () => {
      setValue(value - 1);
    };
    
    // console.log("Outside", value);

    return (
      <div>
        {value}
  
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    );
  }
  