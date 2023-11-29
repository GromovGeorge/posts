import { Outlet } from 'react-router'
import { Sidebar } from '../sidebar/Sidebar'
import cls from './Layout.module.scss'
import { Header } from '../header'

export const Layout = () => {
  return (
    <>
      <div className={cls.layout}>
        <Sidebar />
        <main className={cls.main}>
          <Header />
          <section className={cls.section}>
            <Outlet />
          </section>
        </main>
      </div>
    </>
  )
}
