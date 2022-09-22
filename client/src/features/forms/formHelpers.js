const formConfigToState = (formConfig) =>
  formConfig.reduce((state, { id, value }) => ({ ...state, [id]: value }), {});

export default formConfigToState;
