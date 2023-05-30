import React from 'react';
import styles from './SignUp.module.css'
import { ReactComponent as SignUpImg } from 'assets/images/illustration-sign-up-mobile.svg';
import FormInput from 'components/FormInput';
import FormSubmit from 'components/FormSubmit';

export default function SignUp() {
  return (
    <main className={styles.SignUp}>
      <SignUpImg />

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

      <form className={styles.SignUp_form}>
        <FormInput
          label='Email address'
          type='email'
          placeholder='email@company.com'
        />

        <FormSubmit
          value='Subscribe to monthly newsletter'
          path='/confirmed'
        />
      </form>
    </main>
  )
}
