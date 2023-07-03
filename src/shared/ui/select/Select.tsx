import { FC, SelectHTMLAttributes } from 'react'

import cn from './Select.module.scss'
import { IOptions } from '../../types'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IOptions[]
  defaultValue: string
  value: string
  handleSelect: (value: string) => void
}

const Select: FC<SelectProps> = (props) => {
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
          <option
            className={cn.select__option}
            value={opt.value}
            key={opt.value}
          >
            {opt.name}
          </option>
        ))}
      </select>
    </>
  )
}
export default Select
