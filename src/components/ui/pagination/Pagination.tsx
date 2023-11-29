import { getPagesArray } from '../../../shared/libs'
import cn from './Pagination.module.scss'

interface PaginationProps {
  changePage: (arg: number) => void
  totalPages: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalPages, currentPage, changePage } = props
  let pages = getPagesArray(totalPages)

  return (
    <>
      <div className={cn.pagination}>
        <ul className={cn.list}>
          {pages.map((p) => (
            <li className={cn.item} key={p} onClick={() => changePage(p)}>
              <span className={`${cn.count} ${currentPage === p ? `${cn.current}` : ``}`}>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Pagination
