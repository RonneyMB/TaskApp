import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const ReactContext= React.createContext();
  function ProviderItem( {children} ) {
    
    const {
      task: item,
      saveItem: saveItems,
      lod,
      error,
    } = useLocalStorage("ItemsStorage", []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
    const completedItems = item.filter((items) => !!items.completed).length;
    const totalItems = item.length;
  
    const searchedItems = item.filter((items) => {
      return items.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
    });

    const addItem = (text) => {
      const newItem = [...item]; //Esto toma la lista del estado y crea una copia.
      newItem.push({
        text,
        completed:false,
      });
      saveItems(newItem);
    }
  
    const completeItem = (text) => {
      //marcador
      const newItem = [...item]; //Esto toma la lista del estado y crea una copia.
      const itemIndex = newItem.findIndex((problem) => problem.text === text); //Funcion para buscar y validar.
      newItem[itemIndex].completed = !newItem[itemIndex].completed; //Accede a un indice y cambia su propiedad.
      saveItems(newItem); //llamarlo y enviarle la nueva lista actualizada.
    };
  
    const deleteItem = (text) => {
      //marcador
      const newItem = [...item]; //Esto toma la lista del estado y crea una copia.
      const itemIndex = newItem.findIndex((problem) => problem.text === text); //Funcion para buscar y validar.
      newItem.splice(itemIndex, 1); //Accede a un indice y cambia su propiedad.
      saveItems(newItem); //llamarlo y enviarle la nueva lista actualizada.
    };    

    return (
      <ReactContext.Provider value={{
        searchValue,
        setSearchValue,
        completedItems,
        totalItems,
        lod,
        error,
        searchedItems,
        addItem,
        completeItem,
        deleteItem,
        openModal, 
        setOpenModal,
      }}>
        {children}
      </ReactContext.Provider>
    );

  }

export { ReactContext, ProviderItem };