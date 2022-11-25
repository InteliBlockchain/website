import React, { useContext, useState } from 'react'


export const pages = [
  { title: "Home", selected: true, path: "/" },
  { title: "Sobre nós", selected: false, path: "/about" },
  { title: "Projetos", selected: false, path: "/projects" },
  { title: "Hackathon", selected: false, path: "/hackathon" },
  { title: "Contato", selected: false, path: "/contact" },
];


export const Context = React.createContext({
  pages: undefined,
  setPages: async (pages) => null,
})


export const usePages = () => useContext(Context)


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)


  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}