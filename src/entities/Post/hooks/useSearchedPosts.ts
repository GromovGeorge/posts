import { useMemo } from 'react'
import { useSortedPosts } from './useSortedPosts'
import { IPost } from '../model/types/Post'

export const useSearchedPosts = (
  posts: IPost[],
  sort: string,
  query: string
) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post: IPost) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedPosts])

  return sortedAndSearchedPosts
}
