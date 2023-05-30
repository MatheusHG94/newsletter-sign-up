import React, { useContext } from 'react'
import styles from './Success.module.css'
import { ReactComponent as Icon } from 'assets/images/icon-success.svg'
import Button from 'components/Button'
import { UserContext } from 'commom/context/User'

export default function Success() {

  const { email } = useContext(UserContext);

  return (
    <main className={styles.Success}>
        <Icon className={styles.Success_icon}/>
        <h1>
            Thanks for subscribing!
        </h1>
        <p>
            A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription
        </p>
        <Button>
            Dismiss message
        </Button>
    </main>
  )
}
