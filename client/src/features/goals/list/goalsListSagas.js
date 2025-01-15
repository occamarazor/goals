import { call, put, takeEvery, fork } from 'redux-saga/effects';
import {
  goalsListSubmit,
  goalsListSubmitSuccess,
  goalsListSubmitError,
} from 'features/goals/list/goalsListSlice';
import goalsListSubmitAdapter from 'features/goals/list/goalsListAdapters';
import goalsListSubmitApi from 'features/goals/list/goalsListApi';

export function* goalsListSubmitWorker() {
  try {
    const {
      data: { data, message },
    } = yield call(goalsListSubmitApi);
    const goalsList = yield call(goalsListSubmitAdapter, data);
    yield put(goalsListSubmitSuccess(goalsList));

    // TODO: success notification
    console.log('message:', message);
  } catch ({ message, response }) {
    // TODO: error notification
    yield put(goalsListSubmitError(message));
    console.log('goalsListSubmitWorker error:', message);
    console.log('goalsListSubmitWorker message:', response?.data?.message);
  }
}

function* goalsListSubmitWatcher() {
  yield takeEvery(goalsListSubmit, goalsListSubmitWorker);
}

const goalsListSagas = [fork(goalsListSubmitWatcher)];

export default goalsListSagas;
