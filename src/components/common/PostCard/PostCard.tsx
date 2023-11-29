import { useNavigate } from 'react-router'
import cn from './PostCard.module.scss'

import { MdDelete, MdOpenInNew } from 'react-icons/md'
import { Post } from '../../../shared/types'

interface PostCardProps {
  remove: (arg: Post) => void
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post, remove }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className={cn.post}>
        <h3 className={cn.title}>{post.title}</h3>
        <div className={cn.actions}>
          <button>
            <MdOpenInNew onClick={() => navigate(`/posts/${post.id}`)} size={24} />
          </button>
          <button>
            <MdDelete onClick={() => remove(post)} size={24} color='red' />
          </button>
        </div>
      </div>
    </>
  )
}
export default PostCard
