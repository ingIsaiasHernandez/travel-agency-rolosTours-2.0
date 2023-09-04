import './VerticalTable.css';
import {toursList} from '../data.js'
import { FaTrash,FaSync } from "react-icons/fa";



const TablaVerticalViajes = () => {
  return (
    <table className="tabla-vertical">
      <thead>
        <tr>
          <th>Número de Viaje</th>
          <th>Título</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {toursList.map((viaje, index) => (
          <tr key={index} className="viaje">
            <td className='numero-viaje'>{viaje.numero}</td>
            <td className='titulo'>{viaje.titulo}</td>
            <td >
              <img src={viaje.imagen} alt={`Imagen de ${viaje.titulo}`} className="imagen-viaje" />
            </td>
            <td>
              <button className='update-btn'>Editar<FaSync></FaSync></button>
              <button className='delete-btn'><FaTrash></FaTrash></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaVerticalViajes;

