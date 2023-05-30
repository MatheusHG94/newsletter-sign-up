import React from 'react'
import styles from './FormInput.module.css'

export default function FormInput({ label, type, placeholder }) {
    return (
        <div className={styles.Input}>
            <label className={styles.Input_label}>{label}</label>

            <input
                className={styles.Input_txtInput}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}
