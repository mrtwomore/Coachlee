import { ThemeProvider } from 'next-themes'
import { Montserrat, Roboto } from 'next/font/google'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

// Initialize the fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <ThemeProvider defaultTheme="light">
      <main className={`${montserrat.variable} ${roboto.variable}`}>
        {isClient ? <Component {...pageProps} /> : <div style={{ visibility: 'hidden' }}><Component {...pageProps} /></div>}
      </main>
    </ThemeProvider>
  )
}

export default MyApp 