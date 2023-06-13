import React from "react";
import "./cabeceraS.css";
import Favicon from "./Favicon.svg";
import { ReactContext } from "../../Context/ReactContext";

function HeaderTop() {
  const { searchValue, setSearchValue } = React.useContext(ReactContext);

  return (
    <header className="titleTop">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img className="icon" src={Favicon} alt="favicon" />
      </a>
      <div className="elementsTop">
        <h1 className="h1Top"> AppTask.</h1>
        <h2 className="h2Top">Sistema de lista de tareas.</h2>
        <input
          className="searchStock"
          placeholder="Filtrar lista de tareas"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
      <img
        className="imageHeader"
        src={require("./headerImagePremade.jpg")}
        alt="aquiVaUnaImagen"
      />
    </header>
  );
}
export { HeaderTop };

//Se coloca como event dentro de la capsula para dar la propiedad de evento.
