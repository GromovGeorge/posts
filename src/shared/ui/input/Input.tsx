import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cn from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return <input className={cn.input} {...props} />
}
export default Input
