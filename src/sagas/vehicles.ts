import { all, call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { getVehicles } from './api/vehicles';
import { Saga } from '@sagas/types';

const fetchVehiclesRequestHandler = function* () {
  try {
    const vehiclesData = yield call(getVehicles);

    // yield put(fetchObjectCostEstimatesSuccess({ data: objectCostEstimate }));
  } catch (e) {
    console.error(e);
  }
};

export default function* root() {
  yield all([takeLatest(fetchVehiclesRequest, fetchVehiclesRequestHandler)]);
}
