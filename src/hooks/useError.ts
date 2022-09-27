import { useState } from 'react'

export interface errorHook {
  error: boolean
  msg: string
  setError: Function
}
const useError = (): errorHook => {
  const [errorState, setErrorState] = useState({
    error: false,
    msg: ''
  })

  const setError = (errorMsg: string): void => {
    setErrorState({
      error: true,
      msg: errorMsg
    })

    setTimeout(() => {
      setErrorState({
        error: false,
        msg: ''
      })
    }, 4000)
  }

  return { error: errorState.error, msg: errorState.msg, setError }
}

export default useError
