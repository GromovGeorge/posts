import { Options } from '../../../shared/types'
import cn from './Select.module.scss'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[]
  defaultValue: string
  value: string
  handleSelect: (value: string) => void
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, defaultValue, value, handleSelect } = props
  return (
    <>
      <select
        className={cn.select}
        name=''
        id=''
        value={value}
        onChange={(event) => handleSelect(event.target.value)}
      >
        <option className={cn.select__option} value=''>
          {defaultValue}
        </option>

        {options.map((opt) => (
          <option className={cn.select__option} value={opt.value} key={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  )
}
export default Select
