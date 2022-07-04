import React from 'react'
import styles from '../styles/FieldsNames.module.scss'

const FieldsNames = () => {
  return (
    <div className={styles.fieldsNames}>
      <h2 className={styles.name}>Наименование</h2>
      <h2 className={styles.name}>Адрес</h2>
      <h2 className={styles.name}>ОГРН</h2>
      <h2 className={styles.name}>ИНН</h2>
      <h2 className={styles.name}>Дата регистрации</h2>
    </div>
  )
}

export default FieldsNames