'use client'

import styles from './home.module.css'
import { useEffect, useState } from 'react'
import { ActivationState, ActivationStateContext, initContext } from './context/ActivationStateContext'
import { fetchData } from './utils/fetchData'
import { getQuery, type Query } from './utils/getQuery'
import { Card } from './components/Card'

const Home = () => {
  const [activationState, setActivationState] = useState<ActivationState>(initContext())

  useEffect(() => {
    const query = getQuery()

    const quickSet = (states: Partial<ActivationState>) =>
      setActivationState((activationState) => ({
        ...activationState,
        ...states,
      }))

    !query?.activation_code || !query?.machine_code
      ? quickSet({
          verified: false,
          reason: '参数不合法！',
        })
      : (() => {
          quickSet({
            machineCode: query.machine_code,
          })
          fetchData(query as Required<Query>)
            .then((result) => {
              result.verified
                ? quickSet({
                    verified: true,
                    onlineActivationCode: query.activation_code,
                    offlineActivationCode: result.authorization_code,
                  })
                : quickSet({
                    verified: false,
                    reason: result.description,
                  })
            })
            .catch((e) => {
              quickSet({
                verified: false,
                reason: '网络异常，请重试',
              })
            })
        })()
  }, [])

  return (
    <ActivationStateContext.Provider value={activationState}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>查看激活记录</h3>
        </div>
        <Card></Card>
      </div>
    </ActivationStateContext.Provider>
  )
}

export default Home
