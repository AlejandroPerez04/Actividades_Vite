import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ReactDOM from "react-dom/client";
import { AlumnoProvider } from "./Context/AlumnoContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlumnoProvider>
      <App />
    </AlumnoProvider>
  </BrowserRouter>
);