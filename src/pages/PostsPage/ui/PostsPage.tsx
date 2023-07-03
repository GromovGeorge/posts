import { useEffect, useState } from 'react'

import { IFilterField } from '../../../shared/types'
import { PostFilter, PostForm, PostList } from '../../../entities/Post'
import { Button, Loader, Modal, useFetch } from '../../../shared'
import PostService from '../../../entities/Post/model/service/PostService'
import { IPost } from '../../../entities/Post/model/types/Post'
import { useSearchedPosts } from '../../../entities/Post/hooks/useSearchedPosts'
import { getPageCount } from '../../../shared/libs'

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState<IFilterField>({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  // posts retrieval logic
  const [fetchPosts, isPostsLoading, isPostsError] = useFetch(
    async (limit: number, page: number) => {
      const res = await PostService.getAllPosts(limit, page)
      setPosts(res.data)
      const xTotalCount: number = res.headers['x-total-count']
      setTotalPages(getPageCount(xTotalCount, limit))
    }
  )

  // Searched Posts
  const sortedAndSearchedPosts = useSearchedPosts(
    posts,
    filter.sort,
    filter.query
  )

  // Logic of creating a post
  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Logic of removing a post
  const removePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  // Logic of changing a post
  const changePage = (page: number) => {
    setPage(page)
    scrollTo({
      behavior: 'smooth',
      top: 0,
    })
    // fetchPosts()
  }

  // Logic of posts fetching
  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  return (
    <>
      <div className='posts-page'>
        <div className='posts-page__top'>
          {/* PostFilter */}
          <PostFilter filter={filter} setFilter={setFilter} />
        </div>

        {/* PostList */}
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />

        {/* Loader */}
        {isPostsLoading && <Loader />}

        {/* Error */}
        {isPostsError && (
          <div>Не удалось загрузить посты. Попробуйте снова...</div>
        )}
      </div>

      {/* Add New Post */}
      <div className='add-post'>
        <Button onClick={() => setModal(true)}>Добавить Пост</Button>
      </div>

      {/* Modal */}
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setVisible={setModal} />
      </Modal>
    </>
  )
}
export default PostsPage
