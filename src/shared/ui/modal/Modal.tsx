import cn from './Modal.module.scss'

interface ModalProps {
  children: React.ReactNode
  visible: boolean
  setVisible: (arg: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [cn.modal]

  if (visible) {
    rootClasses.push(cn.active)
  }

  return (
    <>
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cn.modal__wrap} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  )
}
export default Modal
