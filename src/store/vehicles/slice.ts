import { AVAILABLE_SORTS } from '@constants/sort';
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

export type EditVehicle = {
  id: number;
  fieldName: string;
  content?: string | number;
};

export type VehiclesState = {
  vehiclesData: VehiclesData[];
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
      state.vehiclesData = data;
    },
    setDeleteVehicle: (state, { payload }: PayloadAction<number>) => {
      state.vehiclesData = state.vehiclesData.filter((vehicle) => vehicle.id !== payload);
    },
    setSortVehicle: (state, { payload }: PayloadAction<string>) => {
      const sortCallback = AVAILABLE_SORTS[payload];

      state.vehiclesData = state.vehiclesData.sort(sortCallback);
    },
    setEditVehicle: (state, { payload }: PayloadAction<EditVehicle>) => {
      const { id, fieldName, content } = payload;

      state.vehiclesData = state.vehiclesData.map((vehicle) => {
        if (vehicle.id === id) {
          return { ...vehicle, ...{ [fieldName]: content } };
        }
        return vehicle;
      });
    },
  },
});

export default vehiclesSlice.reducer;
