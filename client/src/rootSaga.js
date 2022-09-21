import { all } from 'redux-saga/effects';
import authenticationSagas from 'features/authentication/authenticationSagas';

export default function* rootSaga() {
  yield all([...authenticationSagas]);
}
