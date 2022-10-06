import FormularioNoControlado from "./components/FormularioNoControlado";
import Formulario from './components/Formulario'
function App() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl mt-4 text-center font-bold text-red-700">React Hooks Formularios</h1>
      <FormularioNoControlado />
      <Formulario />
    </div>
  );
}

export default App;
