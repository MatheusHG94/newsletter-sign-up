import React from 'react'
import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom'

export default function Button({ children }) {

  const navigate = useNavigate();

  return (
    <button
      className={styles.Button}
      onClick={() => navigate(-1)}
    >
      {children}
    </button>
  )
}
