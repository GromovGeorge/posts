import PostFilter from '../../components/common/PostFilter/PostFilter'
import PostList from '../../components/common/PostList/PostList'
import { Loader, Pagination } from '../../components/ui'
import { usePost } from '../../context/post'
import cls from './HomePage.module.scss'

const HomePage = () => {
  const {
    searchedAndSortedPosts: posts,
    isPostsLoading,
    isPostsError,
    filter,
    setFilter,
    remove,
    currentPage,
    changePage,
    totalPages,
  } = usePost()

  return (
    <>
      <div className={cls.page}>
        <PostFilter filter={filter} setFilter={setFilter} />

        {isPostsLoading && <Loader />}

        {isPostsError && <div>Не удалось загрузить посты. Попробуйте снова...</div>}

        {!isPostsLoading && !isPostsError && <PostList remove={remove} posts={posts} />}

        <Pagination currentPage={currentPage} changePage={changePage} totalPages={totalPages} />
      </div>
    </>
  )
}
export default HomePage
