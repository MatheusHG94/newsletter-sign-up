import React from 'react'
import styles from './Success.module.css'
import { ReactComponent as Icon } from 'assets/images/icon-success.svg'
import Button from 'components/Button'

export default function Success() {
  return (
    <main className={styles.Success}>
        <Icon className={styles.Success_icon}/>
        <h1>
            Thanks for subscribing!
        </h1>
        <p>
            A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription
        </p>
        <Button>
            Dismiss message
        </Button>
    </main>
  )
}
