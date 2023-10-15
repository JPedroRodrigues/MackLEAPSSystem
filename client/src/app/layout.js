import "../styles/globals.css"
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Sistema Mackleaps',
  description: 'Sistema de gerenciamento do site mackleaps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
