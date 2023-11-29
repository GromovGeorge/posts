import { Comment } from '../../../shared/types'
import cls from './PostComment.module.scss'

interface Props {
  data: Comment
}

export const PostComment: React.FC<Props> = ({ data }) => {
  const { email, body } = data
  return (
    <>
      <div className={cls.comment}>
        <div className={cls.user}>
          <div className={cls.avatar}></div>
          <div className={cls.email}>{email}</div>
        </div>
        <div className={cls.text}>{body}</div>
      </div>
    </>
  )
}
