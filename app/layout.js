import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spectr Marketing Agency | Повышаем Эффективность Вашего Бренда с Успешными Цифровыми Маркетинговыми Решениями',
  description: 'Разблокируйте потенциал своего бренда с Spectr Marketing Agency. Мы предлагаем комплексные цифровые маркетинговые решения, включая SEO, веб-разработку и креативный брендинг. Трансформируйте свое онлайн-присутствие и достигайте результатов с нашей экспертной командой.',
  keywords: ["Spectr Marketing Agency", "маркетинг", "Спект маркетинг агенство", "SMM", "SEO", "Таргет", "Брендинг", "WEB-разработка", "цифровой маркетинг", "продакшн", "AmoCRM", "система лояльности", "мероприятия", "выставки", "социальные медиа", "контент-маркетинг"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning={true} >

      <body className={inter.className}>{children}</body>
    </html>
  )
}
