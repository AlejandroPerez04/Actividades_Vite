import { useAlumnoContext } from "../Context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div>
      <h2>Hola soy Alejandro Perez soy alumno de la carrera de LISI de 4 año y me graduo en junio</h2>
      <p>{alumno.nombre} - {alumno.carrera}</p>
    </div>
  );
}

export default PerfilResumen;
