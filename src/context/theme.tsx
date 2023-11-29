import React from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextType>({})

export const useTheme = (): [Theme, () => void] => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const toggleTheme = () => {
    const t = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(t)
    localStorage.setItem('theme', t)
  }

  return [theme || Theme.LIGHT, toggleTheme]
}

// const defaultTheme = (localStorage!.getItem('theme') as Theme) || 'light'

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.DARK)

  const value = React.useMemo(() => ({ theme, setTheme }), [theme])

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
