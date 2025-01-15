import { privateApi } from 'configs/api/api';
import { GOALS_LIST_URL } from 'features/goals/list/goalsListConstants';

const goalsListSubmitApi = () => privateApi.get(GOALS_LIST_URL);

export default goalsListSubmitApi;
