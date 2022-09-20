import { REGISTER } from 'configs/routing/routingPaths';
import { useNavigationHandler } from 'features/navigation/navigationHooks';
import FormFooter from 'features/forms/FormFooter';

const AuthenticationLoginFooter = () => {
  const handleRegisterNavigate = useNavigationHandler(REGISTER);

  return (
    <FormFooter
      title='Don&#x27;t have an account yet?'
      buttonTitle='Sign up'
      buttonHandler={handleRegisterNavigate}
    />
  );
};

export default AuthenticationLoginFooter;