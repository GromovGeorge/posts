import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from '../PostItem/PostItem'

import cn from './PostList.module.scss'
import { IPost } from '../../model/types/Post'
import { Pagination } from '../../../../shared'

interface PostListProps {
  posts: IPost[]
  remove: (arg: IPost) => void
  changePage: (arg: number) => void
  totalPages: number
  page: number
}

const PostList: React.FC<PostListProps> = (props) => {
  const { posts, remove, totalPages, page, changePage } = props
  if (!posts.length) {
    return <h1 className={cn.posts__title}>Посты не найдены</h1>
  }

  return (
    <>
      <div className={cn.posts}>
        <h1 className={cn.posts__title}>Список постов</h1>

        <ul>
          <TransitionGroup className={cn.posts__list}>
            {posts.map((p) => (
              <CSSTransition classNames='post' key={p.id} timeout={500}>
                <li className={cn.posts__listItem}>
                  <PostItem remove={remove} post={p} />
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>

        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
      </div>
    </>
  )
}
export default PostList
