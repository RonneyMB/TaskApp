import React from "react";
import "./itemCounterS.css";
import { ReactContext } from "../../Context/ReactContext";

export function ItemCounter() {
  const{         
    completedItems:Completed,
    totalItems:Pend,
  } = React.useContext(ReactContext)

  return (
    <div>
      {Completed !== Pend && (
        <h1 className="listS">
          Has Completado<span>{Completed}</span>de
          <span>{Pend}</span>
          Tareas
        </h1>
      )}

      {Completed === Pend &&
        Completed > 0 &&
        Pend > 0 && (
          <h1 className="listS">
            <span>FELICIDADES</span> Ha completado todas las tareas
          </h1>
        )}

      {Completed === 0 && Pend === 0 && (
        <h1 className="listS">
          <span>No tienes ninguna tarea registrada.</span>
        </h1>
      )}
    </div>
  );
}
