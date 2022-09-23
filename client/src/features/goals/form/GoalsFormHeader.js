import { useSelector } from 'react-redux';
import { selectAuthentication } from 'features/authentication/authenticationSlice';
import FormHeader from 'features/form/FormHeader';

// TODO: goal mode: title
const GoalsFormHeader = () => {
  const {
    user: { name },
  } = useSelector(selectAuthentication);
  return <FormHeader title={`Hi, ${name}!`} subtitle='Create a new goal' />;
};

export default GoalsFormHeader;
