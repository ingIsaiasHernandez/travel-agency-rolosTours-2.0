// Importar los módulos de Firebase necesarios
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PrivateRoute({ user }) {

  if (user) {
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

PrivateRoute.propTypes = {
  user: PropTypes.object
};
