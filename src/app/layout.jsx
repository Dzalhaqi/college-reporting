import './globals.css'
import { Inter } from 'next/font/google'
import { useContext } from 'react'

import { ScoreContextProvider } from '@/context/ScoreContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'College Report',
  description: 'A report on the state of college',
}

export default function RootLayout({ children }) {
  return (
    <ScoreContextProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <head>
          <title>{metadata.title}</title>
        </head>
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </ScoreContextProvider>
  );
}
