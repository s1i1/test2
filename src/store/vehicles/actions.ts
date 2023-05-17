import { createAction } from '@reduxjs/toolkit';
import { VehiclesData, vehiclesSlice } from '@store/vehicles/slice';

export type FetchVehiclesSuccessAction = {
  data: VehiclesData[];
};

export const fetchVehiclesRequest = createAction('vehicles/fetchVehiclesRequest');

export const { fetchVehiclesSuccess, setDeleteVehicle, setSortVehicle, setEditVehicle } =
  vehiclesSlice.actions;
