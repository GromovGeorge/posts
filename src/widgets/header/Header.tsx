import { Link, useLocation } from 'react-router-dom'
import cls from './Header.module.scss'
import { FC, memo } from 'react'

const nav = [
  { url: '/', title: 'Главная' },
  { url: '/posts', title: 'Посты' },
]

const Header: FC = () => {
  const location = useLocation()

  const path = location.pathname

  return (
    <>
      <header className={cls.header}>
        <div className={cls.header__wrap}>
          <nav>
            {nav.map((n) => (
              <Link
                className={`${cls.link} ${
                  n.url === path ? `${cls.current}` : ``
                }`}
                to={n.url}
              >
                {n.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
