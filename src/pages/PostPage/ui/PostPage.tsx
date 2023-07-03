import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IPost } from '../../../entities/Post/model/types/Post'
import PostService from '../../../entities/Post/model/service/PostService'
import { IComment } from '../../../shared/types'
import cls from './PostPage.module.scss'
import { PostComments } from '../../../entities/Post/ui/PostComments/PostComments'

const PostPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState<IPost | null>(null)
  const [comments, setComments] = useState<IComment[]>([])
  const [isPostError, setPostError] = useState(false)
  const [isPostLoading, setPostLoading] = useState(true)
  const [isCommentsError, setCommentsError] = useState(false)
  const [isCommentsLoading, setCommentsLoading] = useState(true)

  // post retrieval logic
  useEffect(() => {
    if (id) {
      const fetchPost = async (id: number) => {
        try {
          const res = await PostService.getOnePost(id)
          setPost(res.data)
        } catch (error) {
          setPostError(true)
        } finally {
          setPostLoading(false)
        }
      }

      const fetchComments = async (postID: number) => {
        try {
          const res = await PostService.getPostComments(postID)
          setComments(res.data)
        } catch (error) {
          setCommentsError(false)
        } finally {
          setCommentsLoading(false)
        }
      }

      fetchComments(Number(id))
      fetchPost(Number(id))
    }
  }, [id])

  console.log(post)

  return (
    <>
      <div className='post-page'>
        <div className={cls.page}>
          <div className={cls.post}>
            <div className={cls.userData}>
              <div className={cls.avatar}></div>
              <div className={cls.userID}>UserID: {post?.userId}</div>
            </div>
            <div className={cls.heading}>
              <div className={cls.postID}>{post?.id}. &nbsp;</div>
              <div className={cls.postTitle}>{post?.title}</div>
            </div>
            <div className={cls.postBody}>{post?.body}</div>
          </div>
          <div style={{ marginBottom: '20px', color: '#b1b1b1' }}>
            comments:
          </div>
          <PostComments data={comments} />
        </div>
      </div>
    </>
  )
}
export default PostPage
