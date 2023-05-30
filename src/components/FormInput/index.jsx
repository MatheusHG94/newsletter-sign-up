import React, { useState } from 'react'
import styles from './FormInput.module.css'

export default function FormInput({ label, type, placeholder, value, setValue }) {

    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);

    function validate(input) {
        const validity = input.checkValidity();
        setIsValid(validity);

        if(!validity) {
            return setError('Valid email required');
        }
        setError('');
    }

    return (
        <div className={styles.FormInput}>
            <div className={styles.FormInput_header}>
                <label className={styles.FormInput_label}>
                    {label}
                </label>
                <span className={styles.FormInput_errorMsg}>{error}</span>
            </div>

            <input
                className={`
                    ${styles.FormInput_input}
                    ${!isValid ? styles.FormInput_input___error : ''}
                `}
                type={type}
                placeholder={placeholder}
                value={value}
                required
                onChange={e => setValue(e.target.value)}
                onInvalid={e => e.preventDefault()}
                onBlur={e => validate(e.target)}
            />
        </div>
    )
}
