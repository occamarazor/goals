import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { GOALS } from 'configs/routing/routingPaths';
import historyReplace from 'configs/routing/routingHelpers';
import {
  loginSubmit,
  loginSubmitSuccess,
  loginSubmitError,
} from 'features/authentication/login/loginSlice';
import loginSubmitApi from 'features/authentication/login/loginApi';

export function* loginSubmitWorker({ payload }) {
  try {
    const {
      data: { data, message },
    } = yield call(loginSubmitApi, payload);

    yield put(loginSubmitSuccess(data));

    yield call(historyReplace, {
      pathname: GOALS,
    });

    // TODO: success notification
    console.log('message:', message);
  } catch ({ message, response }) {
    // TODO: error notification
    yield put(loginSubmitError(message));
    console.log('loginSubmitWorker error:', message);
    console.log('loginSubmitWorker message:', response?.data?.message);
  }
}

function* loginSubmitWatcher() {
  yield takeLatest(loginSubmit, loginSubmitWorker);
}

const loginSagas = [fork(loginSubmitWatcher)];

export default loginSagas;
