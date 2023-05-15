import { all, call } from 'redux-saga/effects';
import vehicles from './vehicles';

export default function* root() {
  yield all([call(vehicles)]);
}
