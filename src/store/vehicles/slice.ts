import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchVehiclesSuccessAction } from './actions';

export type VehiclesData = {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
};

export type VehiclesState = {
  vehiclesData: VehiclesData | [];
};

const initialState: VehiclesState = {
  vehiclesData: [],
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    fetchVehiclesSuccess: (state, { payload }: PayloadAction<FetchVehiclesSuccessAction>) => {
      const { data } = payload;
      console.log(data);
    },
  },
});

export default vehiclesSlice.reducer;
