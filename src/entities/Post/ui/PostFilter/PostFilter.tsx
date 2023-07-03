import { Input, Select } from '../../../../shared'
import { useDebounce } from '../../../../shared/hooks/useDebounce'
import { IFilterField } from '../../../../shared/types'
import cn from './PostFilter.module.scss'

interface Props {
  filter: IFilterField
  setFilter: (...filter: IFilterField[]) => void
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

  // console.log(filter)

  return (
    <>
      <div className={cn.filter}>
        <Input
          // value={filter.query}
          onChange={debouncedSearch}
          placeholder='Поиск...'
        />
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
