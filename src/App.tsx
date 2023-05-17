import { VehicleCard } from '@components/VehicleCard';
import { VehicleSort } from '@components/VehicleSort';
import { AVAILABLE_SORTS } from '@constants/sort';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { fetchVehiclesRequest } from '@store/vehicles/actions';
import { getVehicles } from '@store/vehicles/selectors';
import { VehiclesData } from '@store/vehicles/slice';
import { useEffect, useState } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  const vehicles = useAppSelector(getVehicles);

  const [selectedSort, setSelectedSort] = useState('');
  const [sortedVehicles, setSortedVehicles] = useState<VehiclesData[]>([]);

  const sortCallback = AVAILABLE_SORTS[selectedSort];

  const handleChangeSelect = (value: string) => {
    setSelectedSort(value);
  };

  const handleEditVehicle = (id: number, fieldName: string, content: string | number) => {
    setSortedVehicles((prev) =>
      prev.map((vehicle) => {
        if (vehicle.id === id) {
          return { ...vehicle, ...{ [fieldName]: content } };
        }
        return vehicle;
      }),
    );
  };

  useEffect(() => {
    if (!selectedSort) return;
    setSortedVehicles((prev) => [...prev.sort(sortCallback)]);
  }, [selectedSort, sortCallback, handleEditVehicle]);

  useEffect(() => {
    dispatch(fetchVehiclesRequest());
    setSortedVehicles([...vehicles]);
  }, [dispatch]);

  return (
    <>
      <VehicleSort onChange={handleChangeSelect} />
      <VehicleCard vehicles={sortedVehicles} onEdit={handleEditVehicle} />
    </>
  );
};

export default App;
