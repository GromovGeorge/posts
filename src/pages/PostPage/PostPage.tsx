import React from 'react'
import { useParams } from 'react-router'
import { Post, Comment } from '../../shared/types'
import cls from './PostPage.module.scss'
import { ApiService } from '../../api'
import { CommentList } from '../../components/common/CommentList/CommentList'

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = React.useState<Post | null>(null)
  const [comments, setComments] = React.useState<Comment[]>([])
  const [isPostError, setPostError] = React.useState(false)
  const [isPostLoading, setPostLoading] = React.useState(true)
  const [isCommentsError, setCommentsError] = React.useState(false)
  const [isCommentsLoading, setCommentsLoading] = React.useState(true)

  React.useEffect(() => {
    fetchPost(Number(id))
  }, [id])

  React.useEffect(() => {
    fetchComments(Number(id))
  }, [id])

  const fetchPost = async (id: number) => {
    try {
      const res = await ApiService.getPostById(id)
      setPost(res.data)
    } catch (error) {
      setPostError(true)
    } finally {
      setPostLoading(false)
    }
  }

  const fetchComments = async (postId: number) => {
    try {
      const res = await ApiService.getComments(postId)
      setComments(res.data)
    } catch (error) {
      setCommentsError(false)
    } finally {
      setCommentsLoading(false)
    }
  }

  console.log(post)

  return (
    <>
      <div className={cls.page}>
        {isPostLoading && <div>loading ...</div>}

        {!isPostError && !isPostLoading && (
          <div className={cls.post}>
            <div className={cls.user}>
              <div className={cls.avatar}></div>
              <div className={cls.userID}>UserID: {post?.userId}</div>
            </div>

            <div className={cls.title}>{post?.title}</div>

            <div className={cls.text}>{post?.body}</div>
          </div>
        )}

        {isCommentsLoading && <div>loading ...</div>}

        {!isCommentsError && !isCommentsLoading && <CommentList data={comments} />}
      </div>
    </>
  )
}
export default PostPage
