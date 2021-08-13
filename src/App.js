import React, { useReducer } from "react";
import { reducer } from "./state/reducer";
import { initialState } from "./state/state";

import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

import "./App.scss";

const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <main className="calculator">
         <section className="calculator__container">
            <Display {...state} />
            <Keyboard {...state} dispatch={dispatch} />
         </section>
      </main>
   );
};

export default App;
