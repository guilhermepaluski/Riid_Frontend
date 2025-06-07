import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getProtectedData } from '../services/api';

function ProtectedComponent() {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      getProtectedData(token)
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
  }, [token]);

  return <div>Área protegida</div>;
}

export default ProtectedComponent;
