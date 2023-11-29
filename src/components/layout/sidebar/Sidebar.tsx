import { Navbar } from '../../common/Navbar/Navbar'
import cls from './Sidebar.module.scss'

interface SidebarProps {}

const Sidebar: React.FC = (props) => {
  return (
    <>
      <div className={cls.sidebar}>
        <div className={cls.wrap}>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export { Sidebar }
