import goalsFormSagas from 'features/goals/form/goalsFormSagas';
import goalsListSagas from 'features/goals/list/goalsListSagas';

const goalsSagas = [...goalsListSagas, ...goalsFormSagas];

export default goalsSagas;
