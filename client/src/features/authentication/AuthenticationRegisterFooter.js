import { LOGIN } from 'configs/routing/routingPaths';
import { useNavigationHandler } from 'features/navigation/navigationHooks';
import FormFooter from 'features/forms/FormFooter';

const AuthenticationRegisterFooter = () => {
  const handleLoginNavigate = useNavigationHandler(LOGIN);

  return (
    <FormFooter
      title='Already have an account?'
      buttonTitle='Sign in'
      buttonHandler={handleLoginNavigate}
    />
  );
};

export default AuthenticationRegisterFooter;
