import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const useForm = (initialState, submitAction) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const handleFieldChange = useCallback(
    (event) => {
      const { id, value } = event.target;
      setForm({ ...form, [id]: value });
    },
    [form],
  );

  const handleFormSubmit = useCallback(() => {
    dispatch(submitAction(form));
  }, [dispatch, form, submitAction]);

  return [form, handleFieldChange, handleFormSubmit];
};

export default useForm;
