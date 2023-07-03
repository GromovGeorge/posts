import { useState } from 'react'

type CallBackType = (limit: number, page: number) => Promise<void>
type ArgsType = [number, number]
type ReturnType = [CallBackType, boolean, boolean]

export const useFetch = (callback: CallBackType): ReturnType => {
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const fetching = async (...args: ArgsType) => {
    try {
      setLoading(true)
      await callback(...args)
    } catch (e: unknown) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return [fetching, isLoading, isError]
}
