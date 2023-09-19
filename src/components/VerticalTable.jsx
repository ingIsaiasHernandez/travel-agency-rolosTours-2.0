import { useEffect, useState } from 'react';
import './VerticalTable.css';
import { FaTrash } from "react-icons/fa";
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';



const VerticalTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const toursRef = collection(db, 'tours');
      const toursSnapshot = await getDocs(toursRef)
      const toursList = toursSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(toursList);
    }
    fetchData();
  }, []);

  const handleDeleteTour = async (id) => {
    try {
      const tourRef = doc(db, 'tours', id);
      await deleteDoc(tourRef);
      setData(data.filter(viaje => viaje.id !== id));
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
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
          {data.map((viaje, id) => (
            <tr key={id} className="viaje">
              <td className='numero-viaje'>{`# ${id + 1}`}</td>
              <td className='titulo'>{viaje.title}</td>
              <td>
                {/* Mostrar la imagen, deberías usar una URL en lugar de la función getImages */}
                <img src={viaje.imageUrl} alt={`Imagen de ${viaje.title}`} className="imagen-viaje" />
              </td>
              <td>
                <button className='delete-btn' onClick={() => handleDeleteTour(viaje.id)}>
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default VerticalTable;
