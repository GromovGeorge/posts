import { useMemo } from 'react'
import { IPost } from '../model/types/Post'

export const useSortedPosts = (posts: IPost[], sort: string): IPost[] => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => {
        const propA = a[sort as keyof IPost]
        const propB = b[sort as keyof IPost]
				
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

  return sortedPosts
}
