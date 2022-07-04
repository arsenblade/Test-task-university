import React from 'react'
import Field from '../ui/Field/Field'
import styles from '../styles/LineTable.module.scss'
import Button from 'react-bootstrap/esm/Button'
 
const LineTable = ({line, removeLine}) => {
  return (
    <div className={styles.fieldTable}>
      <Field type={'text'} defaultValue={line.nameValue} managed={false}/>
      <Field type={'text'} defaultValue={line.addressValue}/>
      <Field type={'text'} defaultValue={line.ogrnValue}/>
      <Field type={'text'} defaultValue={line.innValue}/>
      <Field type={'text'} defaultValue={line.dataValue}/>
      <Button variant="danger" onClick={() => removeLine(line.id)}>
        Удалить
      </Button>
    </div>
  )
}

export default LineTable