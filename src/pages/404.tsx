import React from 'react'
import styles from '../styles/Home.module.scss'
import Weather from '@/components/weather'

const Error404 = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.companies}>
          <div className={`${styles.company}`}>Page Not Found</div>
        </div>
        <div className={styles.clock}>404</div>
        <Weather />
      </main>
    </>
  )
}

export default Error404
