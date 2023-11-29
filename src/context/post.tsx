import React from 'react'
import { Post, FilterField } from '../shared/types'
import { useFetch, useSearchedPosts } from '../shared/hooks'
import { getPageCount } from '../shared/libs'
import { ApiService } from '../api'

const PostContext = React.createContext<any>({
  // posts: [] as Post[],
  // setPosts: (post: Post) => {},
  // filter: { sort: '', query: '' },
  // setFilter: () => {},
  // modal: false,
  // setModal: () => {},
  // limit: 10,
  // setLimit: () => {},
  // currentPage: 1,
  // setCurrentPage: () => {},
  // totalPages: 10,
  // setTotalPages: () => {},
  // fetchPosts: () => {},
  // isPostsLoading: true,
  // isPostsError: false,
  // isLoading: true,
  // isError: false,
  // create: (post: Post) => {},
  // remove: (post: Post) => {},
  // changePage: (page: number) => {},
})

export const usePost = () => React.useContext(PostContext)

export const PostContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = React.useState<Post[]>([])
  const [isLoading, setLoading] = React.useState(true)
  const [isError, setError] = React.useState(false)
  const [filter, setFilter] = React.useState<FilterField>({ sort: '', query: '' })
  const [modal, setModal] = React.useState(false)
  const [limit, setLimit] = React.useState(10)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState(0)

  React.useEffect(() => {
    fetchPosts(limit, currentPage)
  }, [limit, currentPage])

  const [fetchPosts, isPostsLoading, isPostsError] = useFetch(
    async (limit: number, page: number) => {
      const res = await ApiService.getPosts(limit, page)
      setPosts(res.data)
      const xTotalCount: number = res.headers['x-total-count']
      setTotalPages(getPageCount(xTotalCount, limit))
    }
  )

  const searchedAndSortedPosts = useSearchedPosts(posts, filter.sort, filter.query)

  const create = (post: Post) => {
    setPosts([...posts, post])
    setModal(false)
  }

  const remove = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePage = (page: number) => {
    setCurrentPage(page)
    scrollTo({ behavior: 'smooth', top: 0 })
    fetchPosts(limit, currentPage)
  }

  const value = {
    posts,
    setPosts,
    searchedAndSortedPosts,
    filter,
    setFilter,
    modal,
    setModal,
    limit,
    setLimit,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    changePage,
    fetchPosts,
    isPostsLoading,
    isPostsError,
    isLoading,
    isError,
    create,
    remove,
  }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}
