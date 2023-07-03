// import { useNavigate } from 'react-router'
import { useNavigate } from 'react-router'
import { Button } from '../../../../shared'
import { IPost } from '../../model/types/Post'
import cn from './PostItem.module.scss'

interface PostItemProps {
  remove: (arg: IPost) => void
  post: IPost
}

const PostItem: React.FC<PostItemProps> = ({ post, remove }) => {
  const navigate = useNavigate()

  console.log(navigate)

  return (
    <>
      <div className={cn.post}>
        <div className={cn.post__wrap}>
          <h3 className={cn.post__wrapHead}>
            {post.id}. {post.title}
          </h3>
          <div className={cn.post__wrapText}>{post.body}</div>
        </div>
        <div className={cn.post__actions}>
          <Button onClick={() => navigate(`/posts/${post.id}`)}>Открыть</Button>
          <Button onClick={() => remove(post)}>Удалить</Button>
        </div>
      </div>
    </>
  )
}
export default PostItem
