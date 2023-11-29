import React from 'react'
import cn from './PostForm.module.scss'
import { MdClose } from 'react-icons/md'
import { Post } from '../../../shared/types'
import { Input } from '../../ui'

interface PostFormProps {
  create: (arg: Post) => void
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PostForm: React.FC<PostFormProps> = ({ create, setVisible }) => {
  const [post, setPost] = React.useState({ title: '', body: '' })

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
    <div className={cn.form_wrap}>
      <button className={cn.close_modal} onClick={handleClosePost}>
        <MdClose size={24} />
      </button>
      <form className={cn.form}>
        <div className={cn.fields}>
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
        <div className={cn.actions}>
          <button onClick={handleCreatePost}>Добавить</button>
          <button onClick={handleClosePost}>Отмена</button>
        </div>
      </form>
    </div>
  )
}
export default PostForm
