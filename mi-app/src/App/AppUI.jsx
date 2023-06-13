import React from "react";
import { HeaderTop } from "../components/Cabecera";
import { ItemTask } from "../components/items";
import { ItemCounter } from "../components/itemCounter";
import { ItemList } from "../components/itemList";
import { ItemsLoading, ItemsError, ItemsEmpty } from "../components/itemsLoads";
import { ButtonCreate } from "../components/ButtonCreate";
import { ReactContext } from "../Context/ReactContext";
import { Modales } from "../components/Modal";
import { TaskForm } from "../components/TaskForm";

function AppUI() {
  const { lod, error, searchedItems, completeItem, deleteItem, openModal, } =
    React.useContext(ReactContext);
  
  return (
    <>
      <HeaderTop />
      <ItemCounter />
      <ItemList>
        {lod && <ItemsLoading />}
        {error && <ItemsError />}
        {!lod && searchedItems.length === 0 && <ItemsEmpty />}

        {searchedItems.map((task) => (
          <ItemTask
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeItem(task.text)}
            onDelete={() => deleteItem(task.text)}
          />
        ))}
      </ItemList>
      <div className="sectionButton">
        <ButtonCreate />
      </div>
      {openModal && (<Modales><TaskForm /></Modales>)}
    </>
  );
}

export { AppUI };
