/* eslint-disable array-callback-return */
import "./App.css";
import React from "react";
import { ProviderItem } from "../Context/ReactContext";
import { AppUI } from "./AppUI";

// const defaultItems = [
//   { text: "Stephen Sanchez - Until I Found You (Official Music Video)",
//     completed: false},
//   { text: "Gonna Be Okay - Brent Morgan", completed: false },
//   { text: "SO TIRED - NUEKI TOLCHONOV SO TIRED", completed: false },
//   { text: "Angel (con Rayvon) Shaggy Hot Shot", completed: false },
//   { text: "Believe TEEMID y Beatrich", completed: false },
// ];

// localStorage.setItem('ItemsStorage', JSON.stringify(defaultItems));

function App() {
  return (
    <ProviderItem>
      <AppUI />
    </ProviderItem>

  );
}

export default App;
