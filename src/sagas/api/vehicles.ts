import { call } from 'redux-saga/effects';
import { ENDPOINTS } from '@config';
import { getRequest } from '@sagas/api';

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

export function* getVehicles() {
  const { data } = yield call(getRequest, ENDPOINTS.VEHICLES.GET);

  return data as VehiclesData;
}
