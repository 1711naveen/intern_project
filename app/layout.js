import { Inter } from 'next/font/google'
import './globals.css'
import 'C:/Users/ynnav/OneDrive/Documents/nextjs/Project/intern_project/node_modules/bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
