import { useCallback, useRef } from 'react'

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number = 1000
) => {
  const timer = useRef<number>()

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )

  return debouncedCallback
}
