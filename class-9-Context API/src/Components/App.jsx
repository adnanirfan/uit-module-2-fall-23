import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

function App(props) {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Toolbar />
      </ThemeContext.Provider>

      {/* <Toolbar /> */}
    </>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  const context = useContext(ThemeContext);
  console.log("Context:", context);
  return (
    <button
      onClick={() => {
        if (context.theme === "light") {
          context.setTheme("dark");
        } else if (context.theme === "dark") {
          context.setTheme("light");
        }
      }}
      style={
        context.theme === "dark"
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "aqua", color: "black" }
      }
    >
      Submit
    </button>
  );
}

export default App;
