import { LOGIN } from 'configs/routing/routingPaths';
import { useNavigationHandler } from 'features/navigation/navigationHooks';
import Form from 'features/forms/Form';
import FormHeader from 'features/forms/FormHeader';
import FormFooter from 'features/forms/FormFooter';
import AuthenticationRegisterFormBody from 'features/authentication/AuthenticationRegisterFormBody';

const AuthenticationRegisterForm = () => {
  const handleLoginNavigate = useNavigationHandler(LOGIN);
  const header = <FormHeader title='Become a member' subtitle='Sign up to access your account' />;
  const body = <AuthenticationRegisterFormBody />;
  const footer = (
    <FormFooter
      title='Already have an account?'
      buttonTitle='Sign in'
      buttonHandler={handleLoginNavigate}
    />
  );

  return <Form header={header} body={body} footer={footer} />;
};

export default AuthenticationRegisterForm;
