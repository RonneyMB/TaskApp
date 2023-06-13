import React from "react";
import "./FormS.css";
import { ReactContext } from "../../Context/ReactContext";

export default function TaskForm() {
  const { addItem, setOpenModal } = React.useContext(ReactContext);
  const [newTask, setnewTask] = React.useState(''); 

  const onSubmit = (event) => {
    event.preventDefault();
    addItem(newTask);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setnewTask(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Agregue su nueva tarea</label>
      <textarea placeholder="Ingrese el titulo de su tarea en este campo" 
      value={newTask} 
      onChange={onChange} 
      />
      <div className="buttonsS">
        <button type="submit" className="button add-active">
          Agregar
        </button>
        <button type="button" className="button cancel-active" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
export { TaskForm };
