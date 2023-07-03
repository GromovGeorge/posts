import { FC } from 'react'
import { IComment } from '../../../../shared/types'
import cls from './PostComments.module.scss'
import { PostComment } from '../PostComment/PostComment'

interface Props {
  data: IComment[]
}

export const PostComments: FC<Props> = ({ data }) => {
  return (
    <>
      <div>
        {data.map((comm) => (
          <PostComment data={comm} key={comm.id} />
        ))}
      </div>
    </>
  )
}
