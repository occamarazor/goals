const registerSubmitAdapter = (payload) =>
  Object.entries(payload)
    .filter(([key]) => key !== 'passwordConfirm')
    .reduce((form, [fieldName, fieldValue]) => ({ ...form, [fieldName]: fieldValue }), {});

export default registerSubmitAdapter;
