import { FC } from 'react'
import { IComment } from '../../../../shared/types'
import cls from './PostComment.module.scss'

interface Props {
  data: IComment
}

export const PostComment: FC<Props> = ({ data }) => {
  const { email, body } = data
  return (
    <>
      <div className={cls.comment}>
        <div className={cls.userData}>
          <div className={cls.userAvatar}></div>
          <div className={cls.userEmail}>{email}</div>
        </div>
        <div className={cls.text}>{body}</div>
      </div>
    </>
  )
}
