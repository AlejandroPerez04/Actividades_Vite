import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno] = useState({
    nombre: "Alejandro Daniel Perez Avila",
    carrera: "Licienciatura en Ingeniería en Sistemas de Información",
    grupo: "4-1",
    semestre: "8to"
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}
