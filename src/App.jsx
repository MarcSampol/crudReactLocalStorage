import ListaEstudiantes from "./components/ListaEstudiantes";
import FormularioEstudiantes from "./components/FormularioEstudiantes";
import { useEffect, useState } from "react";

const App = () => {
  const [estudiante, setEstudiante] = useState({});
  const [estudiantes, setEstudiantes] = useState(JSON.parse(localStorage.getItem('estudiantes')) ?? [])

  useEffect(() => {
    localStorage.setItem('estudiantes',JSON.stringify(estudiantes))
  },[estudiantes])

  const borrar = (id) =>{
    if(confirm('Desea eliminarlo?')){
        const nuevo = estudiantes.filter(est => est.id != id)
        setEstudiantes(nuevo)
    }
  }

  return (
    <div className="container text-center">
      <div className="row mt-3">
        <FormularioEstudiantes  estudiante={estudiante} estudiantes={estudiantes} setEstudiantes={setEstudiantes} setEstudiante={setEstudiante}/>
        <ListaEstudiantes borrar ={borrar}estudiantes={estudiantes} estudiante={estudiante} setEstudiante={setEstudiante}/>
      </div>
    </div>
  );
};

export default App;
