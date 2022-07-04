import React from 'react'
import styles from './Field.module.scss'

const Field = ({type, defaultValue, value, setValue, managed, maxLength, placeholder}) => {
  return (
  <>
    {managed
      ? 
        <input className={styles.field} type={type} value={value} onChange={(e) => setValue(e.target.value)} maxLength={maxLength} placeholder={placeholder}/>
      :
        <input className={styles.field} type={type} defaultValue={defaultValue}  maxLength={maxLength}/>}
  </>
  )
}

export default Field