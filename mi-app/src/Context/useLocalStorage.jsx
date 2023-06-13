import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [task, setTask] = React.useState(initialValue);
    const [lod, setLod] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setTask(parsedItem);
          }
  
          setLod(false);
        } catch (error) {
          setLod(false);
          setError(true);
        }
      }, 2000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setTask(newItem);
    };
  
    return {
      task,
      saveItem,
      lod,
      error,
    };
  }

  export {useLocalStorage};