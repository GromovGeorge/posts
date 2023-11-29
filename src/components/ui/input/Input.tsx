import cn from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return <input className={cn.input} {...props} />
}
export default Input
