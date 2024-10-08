import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const inter = Inter({
   subsets: ['latin'],
})

export const metadata = {
   title: 'John Doe',
   description: 'personal website for John Doe',
   keywords: ['personal', 'web development', 'react', 'next.js'],
}

export default function RootLayout({ children }) {
   return (
      <html lang="en" className="scroll-smooth">
         <body
            className={`${inter.className} text-base text-secondary antialiased`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   )
}
