import { RootState } from '@store';

export const getRootState = (state: RootState) => state.vehiclesSlice;
export const getVehicles = (state: RootState) => getRootState(state).vehiclesData;
