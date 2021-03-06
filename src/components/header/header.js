import React from 'react'
import styles from './header.module.css'
import { Link } from '@reach/router'

const header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/`}>
        <div className={styles.item1}>work</div>
      </Link>
      <Link className={styles.link} to={`/photos`}>
        <div className={styles.item3}>photos</div>
      </Link>
      <Link className={styles.link} to={`/about`}>
        <div className={styles.item2}>about</div>
      </Link>
    </div>
  )
}

export default header
