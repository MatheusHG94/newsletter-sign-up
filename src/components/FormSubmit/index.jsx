import React from 'react'
import styles from './FormSubmit.module.css'

export default function FormSubmit({ value, disabled }) {
    return (
        <input
            className={styles.Submit}
            type='submit'
            value={value}
            disabled={disabled}
        />
    )
}
