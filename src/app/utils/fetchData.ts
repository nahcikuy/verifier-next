import { Query } from './getQuery'

const url = 'http://localhost:8001/verify'

type ResponseSuccess = {
  verified: true
  authorization_code: string
}

type ResponseFail = {
  verified: false
  status: number
  description: string
}

type Response = ResponseSuccess | ResponseFail

const fetchData = async ({ machine_code, activation_code }: Required<Query>) => {
  return (await (
    await fetch(`/verify?machine_code=${machine_code}&activation_code=${activation_code}`)
  ).json()) as Response
}

export { type ResponseSuccess, type ResponseFail, type Response, fetchData }
