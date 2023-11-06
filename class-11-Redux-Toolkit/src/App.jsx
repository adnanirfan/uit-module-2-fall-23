import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter";

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
