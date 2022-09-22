import registerSagas from 'features/authentication/register/registerSagas';
import loginSagas from 'features/authentication/login/loginSagas';

const authenticationSagas = [...registerSagas, ...loginSagas];

export default authenticationSagas;
