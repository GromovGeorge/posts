import { FC } from 'react'
import cls from './Navbar.module.scss'
import { useLocation } from 'react-router'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface NavbarProps {}

const nav = [{ url: '/', title: 'Home', icon: <MdDashboard /> }]

const Navbar: FC = (props) => {
  const location = useLocation()

  const path = location.pathname

  return (
    <>
      <nav className={cls.nav}>
        {nav.map((n) => (
          <Link
            className={`${cls.link} ${n.url === path && `${cls.current}`}`}
            to={n.url}
            key={n.title}
          >
            <span className={cls.icon}>
              <MdDashboard size={20} />
            </span>
            <span className={cls.title}>{n.title}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}

export { Navbar }
