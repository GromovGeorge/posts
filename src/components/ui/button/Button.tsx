import cn from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button className={cn.button} {...props} />
    </>
  )
}

export default Button
