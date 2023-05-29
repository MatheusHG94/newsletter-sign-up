import React from 'react'
import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.Form}>
        <label className={styles.Form_label}>Email address</label>

        <input className={styles.Form_txtInput} type='email' placeholder='email@company.com' />

        <input className={styles.Form_submit} type='submit' value='Subscribe to monthly newsletter' />
    </form>
  )
}
