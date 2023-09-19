import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import { FaReply, FaPlus } from "react-icons/fa";
import "./AdminPanel.css";

// Components
import VerticalTable from "../components/VerticalTable";

// Firebase services
import { getAuth, signOut } from "firebase/auth"
import { db, storage } from "../firebase";
import { Timestamp, addDoc, collection} from "firebase/firestore";
import {  getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AdminPanel = () => {

  const auth = getAuth();
  const navigate = useNavigate();

  const [newTour, setNewTour] = useState(false);
  const handleNewTour = () => {
    setNewTour(!newTour);
  };

  // salir de sesion con signOut de firebase
  const onSignOut = () => {
    signOut(auth).then(() => {
      console.log("sesion cerrada");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  const [data, setData] = useState({
    title: "",
    image: null,
    document: null
  });

  const handdleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handdleImageChange = (e) => {
    if (e.target.files[0]) {
      setData({ ...data, image: e.target.files[0] })
    }
  }

  const handdleDocumentChange = (e) => {
    if (e.target.files[0]) {
      setData({ ...data, document: e.target.files[0] })
    }
  }

  const handdleAddTour = async (e) => {
    e.preventDefault();
  
    // Subir imagen a Storage
    const imageRef = ref(storage, `images/${data.image.name}`);
    await uploadBytes(imageRef, data.image);
    const imageUrl = await getDownloadURL(imageRef);
  
    // Subir documento a Storage
    const documentRef = ref(storage,`documents/${data.document.name}`);
    await uploadBytes(documentRef, data.document);
    const documentUrl = await getDownloadURL(documentRef);
  
    // Agregar viaje a Firestore
    const toursRef = collection(db, "tours");
    await addDoc(toursRef, {
      title: data.title,
      imageUrl: imageUrl,
      documentUrl: documentUrl,
      createdAt: Timestamp.fromDate(new Date())
    });
  
    // Limpiar formulario
    setData({
      title: "",
      image: null,
      document: null
    });
  
    
  };

  return (
    <section className="popular-tours">

      <h1 className="popular-tours-heading">Panel de administración</h1>


      <button
        className="new-tour-btn center mdl-button mdl-button--raised mdl-button--colored"
        onClick={onSignOut}>
        <span className="btn-text">
          Sign Out &nbsp; <FaReply />
        </span>
      </button>

      <button
        className="new-tour-btn center mdl-button mdl-button--raised mdl-button--colored"
        onClick={handleNewTour}>
        <span className="btn-text">
          Nuevo Tour &nbsp; <FaPlus />
        </span>
      </button>

      {
        newTour && <div className="overlay">
          <div className="post-form">
            <div className="post-back-img">
              <button
                className="return-btn  mdl-button mdl-button--raised mdl-button--colored"
                onClick={handleNewTour}>
                <span style={{ color: "rgba(33, 150, 243, 1)" }}>Salir</span>   <FaReply style={{ color: "rgba(33, 150, 243, 1)" }} />
              </button>
              <div className="post-in-text">
                <h2 className="active">Nuevo tour</h2>
              </div>
              <div className="layer"></div>
            </div>
            <div className="post-form-section">
              <h1 className="post-title center">Postear nuevo viaje</h1>

              <form onSubmit={handdleAddTour}>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input
                    className="mdl-textfield__input"
                    type="text"
                    placeholder="Titulo del viaje"
                    name="title"
                    value={data.title}
                    onChange={(e) => handdleChange(e)}
                  />
                </div>
                <br />
                <br />
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input
                    type="file"
                    onChange={(e) => handdleImageChange(e)}
                  />

                  <br />
                  <br />
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input
                    type="file"
                    onChange={(e) => handdleDocumentChange(e)}
                  />

                  <br />
                  <br />
                </div>
                <br />
                <button
                  type="submit"
                  className="log-out-btn center mdl-button mdl-button--raised mdl-button--colored"
                >
                  <span className="btn-text">
                    Crear
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      }

      <div>

        <h1 className="popular-tours-heading">Lista de viajes</h1>

        <VerticalTable/> 

      </div>

    </section>
  );
};

export default AdminPanel;