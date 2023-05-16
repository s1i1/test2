import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getVehicles } from './api/vehicles';
import { fetchVehiclesRequest, fetchVehiclesSuccess } from '@store/vehicles/actions';

const fetchVehiclesRequestHandler = function* () {
  try {
    const vehiclesData: ReturnType<typeof getVehicles> = yield call(getVehicles);

    yield put(fetchVehiclesSuccess({ data: vehiclesData }));
  } catch (e) {
    console.error(e);
  }
};

export default function* root() {
  yield all([takeLatest(fetchVehiclesRequest, fetchVehiclesRequestHandler)]);
}
