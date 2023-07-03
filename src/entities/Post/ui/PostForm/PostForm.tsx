import { useState } from 'react'

import cn from './PostForm.module.scss'
import { IPost } from '../../model/types/Post'
import { Button, Input } from '../../../../shared'

interface PostFormProps {
  create: (arg: IPost) => void
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PostForm: React.FC<PostFormProps> = ({ create, setVisible }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const handleCreatePost = (e: any) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
      userId: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  const handleClosePost = (e: any) => {
    e.preventDefault()
    setVisible((prev) => !prev)
  }

  return (
    <form className={cn.form} action=''>
      <div className={cn.form__fields}>
        <Input
          type='text'
          value={post.title}
          placeholder='Название поста'
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <Input
          type='text'
          value={post.body}
          placeholder='Описание поста'
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
      </div>
      <div className={cn.form__actions}>
        <Button onClick={handleCreatePost}>Добавить</Button>
        <Button onClick={handleClosePost}>Отмена</Button>
      </div>
    </form>
  )
}
export default PostForm
