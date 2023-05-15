import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    fetchVehiclesSuccess: (state, { payload }: PayloadAction<VehiclesData>) => {
      console.log(payload);
    },
  },
});

export default vehiclesSlice.reducer;
