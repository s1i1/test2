import { useAppDispatch } from '@hooks/redux';
import { fetchVehiclesRequest } from '@store/vehicles/actions';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchVehiclesRequest());
  }, []);
  return <></>;
};

export default App;
