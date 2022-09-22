import FormLayout from 'features/form/FormLayout';
import LoginHeader from 'features/authentication/login/LoginHeader';
import LoginBody from 'features/authentication/login/LoginBody';
import LoginFooter from 'features/authentication/login/LoginFooter';

const LoginPage = () => {
  const header = <LoginHeader />;
  const body = <LoginBody />;
  const footer = <LoginFooter />;

  return <FormLayout header={header} body={body} footer={footer} />;
};

export default LoginPage;
