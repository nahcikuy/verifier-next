import { createContext } from 'react'

type ActivationState = {
  machineCode: string
  onlineActivationCode: string
  offlineActivationCode: string
  verified: boolean
  reason: string
}

const initContext = () => ({
  machineCode: '',
  offlineActivationCode: '',
  onlineActivationCode: '',
  verified: false,
  reason: '',
})

const ActivationStateContext = createContext<ActivationState>(initContext())

export { type ActivationState, ActivationStateContext, initContext }
