import { Comment } from '../../../shared/types'
import { PostComment } from '../PostComment/PostComment'
import cls from './CommentList.module.scss'

interface Props {
  data: Comment[]
}

export const CommentList: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div style={{ marginBottom: '20px', color: '#b1b1b1' }}>comments:</div>

      <ul className={cls.comment_list}>
        {data.map((comm) => (
          <li key={comm.id}>
            <PostComment data={comm} />
          </li>
        ))}
      </ul>
    </>
  )
}
