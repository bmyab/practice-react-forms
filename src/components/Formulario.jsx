import React, { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescription: "",
    todoEstado: "pendiente",
    todoCheck : false
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {todoName , todoDescription} = todo;

    if(todoDescription.trim() === '' || todoName.trim() === ''){
      setError(true);
      return
    }
    setError(false)
  };

  const handleChange = (e) => {
    // console.log(e.target.value)

    // setTodo({
    //   ...todo,
    //   // Nombre y valor de la propiedad
    //   [e.target.name]: e.target.value,
    // });
    const {name  , value , type ,checked} =  e.target;

    setTodo({
      ...todo , 
      [name]: type === 'checkbox' ? checked : value
    })
  };

  const PintarError = () => (
    <div className="text-xl text-red-400 text-center font-bold">Todos los campos son obligatorios</div>
  );


  return (
    <>
      <h2 className="mt-4 text-center text-2xl font-semibold text-slate-600">
        Formulario Controlado
      </h2>
      <form onSubmit={handleSubmit} className="pt-8 px-8">
        <input
          className="mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          className="mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Ingrese descripcion del Todo"
          cols="30"
          rows="10"
          name="todoDescription"
          onChange={handleChange}
          value={todo.todoDescription}
        />

        <select
          className="block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="todoEstado"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <div className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            className=" rounded
                      border-gray-300
                      text-indigo-600
                      shadow-sm
                      focus:border-indigo-300
                      focus:ring
                      focus:ring-offset-0
                      focus:ring-indigo-200
                      focus:ring-opacity-50"
            id="checkPrueba"
            name="todoCheck"
            checked = {todo.todoCheck}
            onChange = { handleChange }
            
          />
          <label className="ml-2" htmlFor="checkPrueba">Dar Prioridad</label>
        </div>

        <button
          type="submit"
          className="block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar
        </button>
      </form>
      {error ? <PintarError /> : null}
    </>
  );
};

export default Formulario;
