import React from "react";
import "./ButtonCreateS.css";
import { ReactContext } from "../../Context/ReactContext";

function ButtonCreate() {
  const { openModal, setOpenModal } = React.useContext(ReactContext);

  return (
    <button
      className="buttonPosition buttonStyle"
      onClick={(event) => {
        setOpenModal(!openModal);
      }}
    >
      +
    </button>
  );
}
export { ButtonCreate };
// En las propiedades On siempre hay que encapsular la funcion para que ocurra solamente cuando le den click
