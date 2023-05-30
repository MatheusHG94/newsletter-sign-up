import React from 'react'
import styles from './FormInput.module.css'

export default function FormInput({ label, type, placeholder, value, setValue }) {
    return (
        <div className={styles.FormInput}>
            <label className={styles.FormInput_label}>
                {label}
            </label>

            <input
                className={styles.FormInput_input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                required
            />
        </div>
    )
}
