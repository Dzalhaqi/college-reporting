'use client'

import { createContext, useState } from "react"

export const ScoreContext = createContext()

export function ScoreContextProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <ScoreContext.Provider value={{ data, setData }}>
      {children}
    </ScoreContext.Provider>
  )
}
