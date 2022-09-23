import { call, put, takeLatest, fork } from 'redux-saga/effects';
import {
  goalsFormSubmit,
  goalsFormSubmitSuccess,
  goalsFormSubmitError,
} from 'features/goals/form/goalsFormSlice';
import goalsFormSubmitAdapter from 'features/goals/form/goalsFormAdapters';
import goalsFormSubmitApi from 'features/goals/form/goalsFormApi';

export function* goalsFormSubmitWorker({ payload }) {
  try {
    const goal = yield call(goalsFormSubmitAdapter, payload);
    const {
      data: { data, message },
    } = yield call(goalsFormSubmitApi, goal);

    yield put(goalsFormSubmitSuccess(data));

    // TODO: success notification
    console.log('message:', message);
  } catch ({ message, response }) {
    // TODO: error notification
    yield put(goalsFormSubmitError(message));
    console.log('goalsFormSubmitWorker error:', message);
    console.log('goalsFormSubmitWorker message:', response?.data?.message);
  }
}

function* goalsFormSubmitWatcher() {
  yield takeLatest(goalsFormSubmit, goalsFormSubmitWorker);
}

const goalsFormSagas = [fork(goalsFormSubmitWatcher)];

export default goalsFormSagas;
