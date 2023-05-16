import { createAction } from '@reduxjs/toolkit';
import { getVehicles } from '@sagas/api/vehicles';
import { vehiclesSlice } from '@store/vehicles/slice';

export type FetchVehiclesSuccessAction = {
  data: ReturnType<typeof getVehicles>;
};

export const fetchVehiclesRequest = createAction('vehicles/fetchVehiclesRequest');

export const { fetchVehiclesSuccess } = vehiclesSlice.actions;
