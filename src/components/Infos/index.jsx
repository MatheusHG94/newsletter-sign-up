import React from 'react'
import styles from './Infos.module.css'

export default function Infos() {
  return (
    <div className={styles.Infos}>
        <h1>
            Stay updated!
        </h1>

        <p>
            Join 60.000+ product managers receiving monthly updates on:
        </p>
        
        <ul className={styles.Infos_list} >
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
        </ul>
    </div>
  )
}
