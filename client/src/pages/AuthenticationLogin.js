import FormLayout from 'features/forms/FormLayout';
import AuthenticationLoginHeader from 'features/authentication/AuthenticationLoginHeader';
import AuthenticationLoginBody from 'features/authentication/AuthenticationLoginBody';
import AuthenticationLoginFooter from 'features/authentication/AuthenticationLoginFooter';

const AuthenticationLogin = () => {
  const header = <AuthenticationLoginHeader />;
  const body = <AuthenticationLoginBody />;
  const footer = <AuthenticationLoginFooter />;

  return <FormLayout header={header} body={body} footer={footer} />;
};

export default AuthenticationLogin;
