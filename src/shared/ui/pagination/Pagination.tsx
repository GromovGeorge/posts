import { getPagesArray } from '../../libs'
import cn from './Pagination.module.scss'

interface PaginationProps {
  changePage: (arg: number) => void
  totalPages: number
  page: number
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalPages, page, changePage } = props
  let pages = getPagesArray(totalPages)

  return (
    <>
      <div className={cn.pagination}>
        <ul className='pagination__list'>
          {pages.map((p) => (
            <li
              className='pagination__list-item'
              key={p}
              onClick={() => changePage(p)}
            >
              <span
                className={`${cn.count} ${page === p ? `${cn.current}` : ``}`}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Pagination
