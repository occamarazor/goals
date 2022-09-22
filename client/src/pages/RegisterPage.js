import FormLayout from 'features/form/FormLayout';
import RegisterHeader from 'features/authentication/register/RegisterHeader';
import RegisterBody from 'features/authentication/register/RegisterBody';
import RegisterFooter from 'features/authentication/register/RegisterFooter';

const RegisterPage = () => {
  const header = <RegisterHeader />;
  const body = <RegisterBody />;
  const footer = <RegisterFooter />;

  return <FormLayout header={header} body={body} footer={footer} />;
};

export default RegisterPage;
