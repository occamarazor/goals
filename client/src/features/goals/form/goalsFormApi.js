import { privateApi } from 'configs/api/api';
import { GOALS_FORM_URL } from 'features/goals/form/goalsFormConstants';

const goalsFormSubmitApi = (goal) => privateApi.post(GOALS_FORM_URL, goal);

export default goalsFormSubmitApi;
