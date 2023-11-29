import { usePost } from '../../../context/post'
import PostForm from '../../common/PostForm/PostForm'
import { Modal } from '../../ui'
import cls from './Header.module.scss'

import { MdAddCircleOutline } from 'react-icons/md'

const Header: React.FC = () => {
  const { create, modal, setModal } = usePost()

  return (
    <>
      <header className={cls.header}>
        <div className={cls.wrap}>
          <button onClick={() => setModal(true)} title='create post'>
            <MdAddCircleOutline size={24} />
          </button>
        </div>
      </header>

      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={create} setVisible={setModal} />
      </Modal>
    </>
  )
}
export default Header
