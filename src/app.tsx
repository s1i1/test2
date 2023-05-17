import { VehicleCard } from '@components/VehicleCard';
import { VehicleSort } from '@components/VehicleSort';
import { AVAILABLE_SORTS } from '@constants/sort';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import {
  fetchVehiclesRequest,
  setDeleteVehicle,
  setEditVehicle,
  setSortVehicle,
} from '@store/vehicles/actions';
import { getVehicles } from '@store/vehicles/selectors';
import { EditVehicle } from '@store/vehicles/slice';
import { useEffect, useState } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  const vehicles = useAppSelector(getVehicles);

  const [selectedSort, setSelectedSort] = useState('');

  const sortCallback = AVAILABLE_SORTS[selectedSort];

  const handleChangeSelect = (value: string) => {
    setSelectedSort(value);
  };

  const handleEditVehicle = ({ id, fieldName, content }: EditVehicle) => {
    dispatch(setEditVehicle({ id, fieldName, content }));
  };

  const handleDeleteCard = (id: number) => {
    dispatch(setDeleteVehicle(id));
  };

  useEffect(() => {
    if (!selectedSort) return;
    dispatch(setSortVehicle(selectedSort));
  }, [selectedSort, sortCallback, handleEditVehicle, dispatch]);

  useEffect(() => {
    dispatch(fetchVehiclesRequest());
  }, [dispatch]);

  return (
    <>
      <VehicleSort onChange={handleChangeSelect} />
      <VehicleCard vehicles={vehicles} onEdit={handleEditVehicle} onDelete={handleDeleteCard} />
    </>
  );
};

export default App;
