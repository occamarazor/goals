import { LOGIN } from 'configs/routing/routingPaths';
import { useNavigationHandler } from 'features/navigation/navigationHooks';
import FormFooter from 'features/form/FormFooter';

const RegisterFooter = () => {
  const handleLoginNavigate = useNavigationHandler(LOGIN);

  return (
    <FormFooter
      title='Already have an account?'
      buttonTitle='Sign in'
      buttonHandler={handleLoginNavigate}
    />
  );
};

export default RegisterFooter;
