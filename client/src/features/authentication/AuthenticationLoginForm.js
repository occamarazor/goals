import { REGISTER } from 'configs/routing/routingPaths';
import { useNavigationHandler } from 'features/navigation/navigationHooks';
import Form from 'features/forms/Form';
import FormHeader from 'features/forms/FormHeader';
import FormFooter from 'features/forms/FormFooter';
import AuthenticationLoginFormBody from 'features/authentication/AuthenticationLoginFormBody';

const AuthenticationLoginForm = () => {
  const handleRegisterNavigate = useNavigationHandler(REGISTER);
  const header = <FormHeader title='Welcome back!' subtitle='Sign in to access your account' />;
  const body = <AuthenticationLoginFormBody />;
  const footer = (
    <FormFooter
      title='Don&#x27;t have an account yet?'
      buttonTitle='Sign up'
      buttonHandler={handleRegisterNavigate}
    />
  );

  return <Form header={header} body={body} footer={footer} />;
};

export default AuthenticationLoginForm;
