import React from 'react'
import { createPortal } from 'react-dom'

const Portal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = React.useRef<Element | null>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#popup')
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}

export { Portal }
