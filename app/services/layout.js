import { Inter } from 'next/font/google'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata  = {
  title: 'Spectr услуги',
  description: 'Разблокируйте потенциал своего бренда с Spectr Marketing Agency. Мы предлагаем комплексные цифровые маркетинговые решения, включая SEO, веб-разработку и креативный брендинг. Трансформируйте свое онлайн-присутствие и достигайте результатов с нашей экспертной командой.',
  keywords: ["SMM", "SEO", "Таргет", "Брендинг", "Full маркетинг", "Digital маркетинг", "Production", "AmoCRM", "Система лояльности", "Мероприятия и выставки", "WEB - разработка"],
  authors: 'Spectr Marketing Agency',
  metadataBase: new URL("https://www.spectragency.uz/services")
}

export default function ServicesLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning={true} >

      <body className={inter.className}>{children}</body>
    </html>
  )
}
