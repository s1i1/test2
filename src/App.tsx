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

  useEffect(() => {
    if (!selectedSort) return;
    setSortedVehicles((prev) => [...prev.sort(sortCallback)]);
  }, [selectedSort, sortCallback]);

  const handleChange = (value: string) => {
    setSelectedSort(value);
  };

  useEffect(() => {
    dispatch(fetchVehiclesRequest());
    setSortedVehicles([...vehicles]);
  }, [dispatch]);

  return (
    <>
      <VehicleSort onChange={handleChange} />
      <VehicleCard vehicles={sortedVehicles} />
    </>
  );
};

export default App;
