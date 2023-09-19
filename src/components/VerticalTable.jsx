import { useEffect, useState } from 'react';
import './VerticalTable.css';
import { FaTrash } from "react-icons/fa";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';


// Componente TablaVerticalViajes
const TablaVerticalViajes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const toursRef = collection(db, 'tours');
      const toursSnapshot = await getDocs(toursRef)
      const toursList = toursSnapshot.docs.map(doc => doc.data());
      setData(toursList);
    }
    fetchData();
  },[])

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
        {data.map((viaje, index) => (
          <tr key={index} className="viaje">
            <td className='numero-viaje'>{`# ${index + 1}`}</td>
            <td className='titulo'>{viaje.title}</td>
            <td>
              {/* Mostrar la imagen, deberías usar una URL en lugar de la función getImages */}
              <img src={viaje.imageUrl} alt={`Imagen de ${viaje.title}`} className="imagen-viaje" />
            </td>
            <td>
              <button className='delete-btn' >
                <FaTrash></FaTrash>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaVerticalViajes;
