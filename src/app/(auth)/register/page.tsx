import styles from './register.module.css';

import RegisterForm from '@/components/registerForm/registerForm';

export const metadata = {
  title: 'Register',
  description: 'Register your Tinnitus account',
};

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
