import { Post } from '../../../shared/types'
import PostCard from '../PostCard/PostCard'

import cn from './PostList.module.scss'

interface PostListProps {
  posts: Post[]
  remove: (arg: Post) => void
}

const PostList: React.FC<PostListProps> = (props) => {
  const { posts, remove } = props

  return (
    <ul className={cn.post_list}>
      {posts.map((p) => (
        <li className={cn.item} key={p.id}>
          <PostCard remove={remove} post={p} />
        </li>
      ))}
    </ul>
  )
}
export default PostList
