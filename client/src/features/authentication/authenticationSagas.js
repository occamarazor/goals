import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { GOALS } from 'configs/routing/routingPaths';
import historyReplace from 'configs/routing/routingHelpers';
import {
  submitLogin,
  submitLoginSuccess,
  submitLoginError,
} from 'features/authentication/authenticationSlice';
import authenticationSubmitLoginApi from 'features/authentication/authenticationApi';

export function* authenticationSubmitLoginWorker({ payload }) {
  try {
    const {
      data: { data, message },
    } = yield call(authenticationSubmitLoginApi, payload);
    yield put(submitLoginSuccess(data));

    yield call(historyReplace, {
      pathname: GOALS,
    });

    // TODO: success notification
    console.log('message:', message);
  } catch ({ message, response }) {
    // TODO: error notification
    yield put(submitLoginError(message));
    console.log('submitLoginWorker error:', message);
    console.log('submitLoginWorker message:', response?.data?.message);
  }
}

function* authenticationSubmitLoginWatcher() {
  yield takeLatest(submitLogin, authenticationSubmitLoginWorker);
}

const authenticationSagas = [fork(authenticationSubmitLoginWatcher)];

export default authenticationSagas;
