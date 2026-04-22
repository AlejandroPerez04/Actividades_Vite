import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

function Usuarios() {
  // Estado para guardar el arreglo de usuarios
  const [usuarios, setUsuarios] = useState([]);

  // useEffect para ejecutar el fetch solo cuando el componente carga
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []); // El arreglo vacío [] es clave para que no se cicle infinito

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Usuarios desde API</h1>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Correo</strong></TableCell>
              <TableCell><strong>Teléfono</strong></TableCell>
              <TableCell><strong>Sitio web</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Aquí mapeamos la información guardada en el estado */}
            {usuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.name}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.phone}</TableCell>
                <TableCell>{usuario.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Usuarios;