import formConfigToState from 'features/form/formHelpers';
import { GOALS_URL } from 'features/goals/goalsConstants';

export const GOALS_FORM_SLICE_NAME = 'form';

export const GOALS_FORM_URL = GOALS_URL;

export const goalsFormConfig = [
  {
    id: 'title',
    placeholder: 'Goal text',
    type: 'text',
    value: '',
  },
  {
    id: 'time',
    placeholder: 'Goal duration',
    type: 'text',
    value: '',
  },
];

export const goalsFormState = formConfigToState(goalsFormConfig);

export const GOALS_FORM_MODES = {
  CREATE: 'CREATE',
};
