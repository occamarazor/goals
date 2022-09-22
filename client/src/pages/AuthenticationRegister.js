import FormLayout from 'features/form/FormLayout';
import AuthenticationRegisterHeader from 'features/authentication/AuthenticationRegisterHeader';
import AuthenticationRegisterBody from 'features/authentication/AuthenticationRegisterBody';
import AuthenticationRegisterFooter from 'features/authentication/AuthenticationRegisterFooter';

const AuthenticationRegister = () => {
  const header = <AuthenticationRegisterHeader />;
  const body = <AuthenticationRegisterBody />;
  const footer = <AuthenticationRegisterFooter />;

  return <FormLayout header={header} body={body} footer={footer} />;
};

export default AuthenticationRegister;
