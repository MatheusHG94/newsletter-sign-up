import React from 'react'
import styles from './FormSubmit.module.css'
import { useNavigate } from 'react-router-dom'

export default function FormSubmit({ value, path }) {

    const navigate = useNavigate();

    return (
        <input
            className={styles.Submit}
            type='submit'
            value={value}
            onClick={() => navigate(`${path}`)}
        />
    )
}
