import React from 'react'
import { Post } from '../types'

export const useDebounce = (callback: (...args: any[]) => void, delay: number = 1000) => {
  const timer = React.useRef<number>()

  const debouncedCallback = React.useCallback(
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

type CallBackType = (limit: number, page: number) => Promise<void>
type ReturnType = [CallBackType, boolean, boolean]

export const useFetch = (callback: CallBackType): ReturnType => {
  const [isLoading, setLoading] = React.useState(false)
  const [isError, setError] = React.useState(false)

  const fetching = async (...args: [number, number]) => {
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

export const useSortedPosts = (posts: Post[], sort: string): Post[] => {
  const result = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => {
        const propA = a[sort as keyof Post]
        const propB = b[sort as keyof Post]

        const condition = typeof propA === 'string' && typeof propB === 'string'

        if (condition) {
          return propA.localeCompare(propB)
        } else {
          return propA < propB ? -1 : propA > propB ? 1 : 0
        }
      })
    }
    return [...posts]
  }, [sort, posts])

  return result
}

export const useSearchedPosts = (posts: Post[], sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const result = React.useMemo(() => {
    return sortedPosts.filter((post: Post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedPosts])

  return result
}

export const usePagination = () => {}
