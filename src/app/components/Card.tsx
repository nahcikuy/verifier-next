import { Row } from './Row'
import { useContext } from 'react'
import styles from './Card.module.css'
import { ActivationStateContext } from '../context/ActivationStateContext'

const Card = () => {
  const { verified, machineCode, offlineActivationCode, onlineActivationCode, reason } =
    useContext(ActivationStateContext)

  return (
    <div className={styles.container}>
      <Row left='机器码' right={machineCode}></Row>
      <Row left='离线激活码' right={offlineActivationCode}></Row>
      <Row left='在线激活码' right={onlineActivationCode}></Row>
      <span className={styles.reason}>{verified ? '激活成功' : `激活失败:${reason}`}</span>
    </div>
  )
}

export { Card }
