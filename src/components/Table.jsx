import React, { useState } from 'react'
import LineTable from './LineTable'
import styles from '../styles/Table.module.scss'
import FieldsNames from './FieldsNames'
import MyModal from './MyModal'
import Button from 'react-bootstrap/esm/Button'

const Table = () => {
  const [show, setShow] = useState(false);
  const [lines, setLines] = useState([]);

  const handleShow = () => setShow(true);
  const removeLine = (id) => setLines(lines.filter(line => line.id !== id))
  return (
    <div className={styles.table}>
      <Button variant="primary" onClick={handleShow} style={{marginTop: '40px'}}>
        Добавить элемент в таблицу
      </Button>
      <h1 className={styles.title}>Таблица юридических лиц</h1>
      <FieldsNames />
      {lines && lines.map((line) => 
        <LineTable 
          key={line.id} 
          line={line}
          removeLine={removeLine}
        />)}
      <MyModal show={show} setShow={setShow} lines={lines} setLines={setLines}/>
    </div>
  )
}

export default Table