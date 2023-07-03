import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import cn from './Button.module.scss'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <>
      <button className={cn.button} {...props} />
    </>
  )
}

export default Button
