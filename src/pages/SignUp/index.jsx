import React, { useContext } from 'react';
import styles from './SignUp.module.css'
import FormInput from 'components/FormInput';
import FormSubmit from 'components/FormSubmit';
import { UserContext } from 'commom/context/User';
import { useNavigate } from 'react-router-dom';
import Banner from 'components/Banner';

export default function SignUp() {

  const { email, setEmail } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <main className={styles.SignUp}>
      <div className={styles.SignUp_banner}>
        <Banner />
      </div>

      <div className={styles.SignUp_info}>
        <h1>
          Stay updated!
        </h1>

        <p>
          Join 60.000+ product managers receiving monthly updates on:
        </p>
        
        <ul className={styles.SignUp_list} >
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
      </div>

      <form
        className={styles.SignUp_form}
        onSubmit={() => navigate('/confirmed')}
        method='post'
        action='#'
      >
        <FormInput
          label='Email address'
          type='email'
          placeholder='email@company.com'
          value={email}
          setValue={setEmail}
        />

        <FormSubmit
          value='Subscribe to monthly newsletter'
          disabled={email === ''}
        />
      </form>
    </main>
  )
}
