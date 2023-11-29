import { useDebounce } from '../../../shared/hooks'
import { FilterField } from '../../../shared/types'
import { Input, Select } from '../../ui'
import cn from './PostFilter.module.scss'

interface Props {
  filter: FilterField
  setFilter: (...filter: FilterField[]) => void
}

const PostFilter: React.FC<Props> = ({ filter, setFilter }) => {
  const debouncedSearch = useDebounce(onSearch)

  function onSearch(e: any) {
    setFilter({ ...filter, query: e.target.value })
  }

  function onSelect(selectedSort: string) {
    setFilter({ ...filter, sort: selectedSort })
  }

  const options = [
    { value: 'title', name: 'По названию' },
    { value: 'body', name: 'По описанию' },
  ]

  return (
    <>
      <div className={cn.filter}>
        <Input onChange={debouncedSearch} placeholder='Поиск...' />
        <Select
          handleSelect={onSelect}
          value={filter.sort}
          defaultValue='Сортировать'
          options={options}
        />
      </div>
    </>
  )
}
export default PostFilter
