import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { GOALS } from 'configs/routing/routingPaths';
import historyReplace from 'configs/routing/routingHelpers';
import {
  registerSubmit,
  registerSubmitSuccess,
  registerSubmitError,
} from 'features/authentication/register/registerSlice';
import registerSubmitAdapter from 'features/authentication/register/registerAdapters';
import registerSubmitApi from 'features/authentication/register/registerApi';

export function* registerSubmitWorker({ payload }) {
  try {
    const credentials = yield call(registerSubmitAdapter, payload);
    const {
      data: { data, message },
    } = yield call(registerSubmitApi, credentials);

    yield put(registerSubmitSuccess(data));
    yield call(historyReplace, {
      pathname: GOALS,
    });

    // TODO: success notification
    console.log('message:', message);
  } catch ({ message, response }) {
    // TODO: error notification
    yield put(registerSubmitError(message));
    console.log('registerSubmitWorker error:', message);
    console.log('registerSubmitWorker message:', response?.data?.message);
  }
}

function* registerSubmitWatcher() {
  yield takeLatest(registerSubmit, registerSubmitWorker);
}

const registerSagas = [fork(registerSubmitWatcher)];

export default registerSagas;
