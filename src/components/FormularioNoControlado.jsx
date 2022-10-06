import React, { useRef } from "react";

const FormularioNoControlado = () => {

  const formulario = useRef(null);

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log('Enviando el formulario')

    const datos = new FormData(formulario.current)

    console.log(...datos.entries())

    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos)

    const { todoDescription , todoName , todoEstado } = objetoDatos

    if(todoDescription.trim() === '' || todoName.trim() === '' || todoEstado.trim() === ''){
      console.log('Todos los elementos deben contener Datos')
      return
    }
    console.log('Paso validacion')
  }

  return (
    <>
      <h2 className="mt-4 text-center text-2xl font-semibold text-slate-600">
        Formulario No Controlado
      </h2>
      <form 
        onSubmit={ handleSubmit }
        ref={formulario}
        className="pt-8 px-8"
      >
        <input
          className="mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          defaultValue="Tarea #01"
        />
        <textarea
          className="mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
          name="todoDescription"
          placeholder="Ingrese descripcion del Todo"
          cols="30"
          rows="10"
          defaultValue="Descripcion de la tarea 01"
        />

        <select
          className="block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
          name="todoEstado"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <button 
          type="submit"
          className="block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormularioNoControlado;
