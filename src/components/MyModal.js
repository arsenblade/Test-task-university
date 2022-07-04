import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import styles from '../styles/MyModal.module.scss'
import dayjs from 'dayjs'
import { innPost } from '../http/innApi'
import Field from '../ui/Field/Field'
const uuid = require('uuid')

const MyModal = ({show, setShow, lines, setLines}) => {
  const [nameValue, setNameValue] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [ogrnValue, setOgrnValue] = useState('')
  const [innValue, setInnValue] = useState('')
  const [dataValue, setDataValue] = useState('')
  const [errorInn, setErrorInn] = useState(false)

  const saveLine = () => {
    setLines([...lines, {
      id: uuid.v4(),
      nameValue,
      addressValue,
      ogrnValue,
      innValue,
      dataValue
    }])
    handleClose()
  }

  const loadByInn = async () => {
    if(innValue.length === 10) {
      const {suggestions} = await innPost(innValue)
      setErrorInn(false)
      console.log(suggestions[0])
      setAddressValue(suggestions[0].data.address.value)
      setNameValue(suggestions[0].data.name.short)
      setOgrnValue(suggestions[0].data.ogrn)
      setDataValue(dayjs(suggestions[0].data.state.registration_date).format('DD.MM.YYYY'))
    }
    else {
      setErrorInn(true)
    }
  }

  const handleClose = () => {
    setShow(false)
    setErrorInn(false)
    clearField()
  }
  const clearField = () => {
    setAddressValue('')
    setDataValue('')
    setInnValue('')
    setNameValue('')
    setOgrnValue('')
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><h4 className={styles.title}>Добавить поле</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.myModal}>
          <div className={styles.name}>
            <h5 className={styles.title}>Наименование</h5>
            <Field type={'text'} value={nameValue} setValue={setNameValue} managed/>
          </div>
          <div>
            <h5 className={styles.title}>Адрес</h5>
            <Field type={'text'} value={addressValue} setValue={setAddressValue} managed/>
          </div>
          <div>
            <h5 className={styles.title}>Дата регистрации</h5>
            <Field type={'text'} value={dataValue} setValue={setDataValue} managed placeholder='11.10.2020'/>
          </div>
          <div className={styles.ogrn}>
            <h5 className={styles.title}>ОГРН</h5>
            <Field type={'text'} value={ogrnValue} setValue={setOgrnValue} managed maxLength={13} placeholder='1025700767817'/>
          </div>
          <div className={styles.inn}>
            <h5 className={styles.title}>ИНН</h5>
            <Field type={'text'} value={innValue} setValue={setInnValue} managed maxLength={10} placeholder='6501095788'/>
            {errorInn && <span>В инн должно быть 10 цифр</span>}
          </div>
          <div>
            <Button variant="success" onClick={loadByInn}>Загрузить по инн</Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={() => saveLine()}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal