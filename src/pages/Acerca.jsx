import miFoto from "../assets/Foto_Perfil.jpg";

function Acerca() {
  return (
    <div>
      <h1>Acerca de mí</h1>

      <p><strong>Nombre:</strong> Alejandro Daniel Perez Avila</p>
      <p><strong>Carrera:</strong> Ingeniería en Sistemas</p>

      <p>
        Soy estudiante interesado en el desarrollo web. 
        Me gusta aprender nuevas tecnologías y crear aplicaciones funcionales. 
        Vamos a pasar con 10 esta materia.
        Me interesa tambien el area de ciberseguridad.
        Tengo 23 años y vivo en Mazatlan.
      </p>

      <h3>Habilidades</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <img 
  src={miFoto} 
  alt="Foto de perfil de Alejandro" 
  width="150" 
/>
    </div>
  );
}

export default Acerca;