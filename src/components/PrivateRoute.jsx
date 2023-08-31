// Importar los módulos de Firebase necesarios
import { Navigate, Outlet } from 'react-router-dom';



export function PrivateRoute({ user }) {


  if (user) {
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }


}




