import './globals.css'

export const metadata = {
  title: 'Constituent Intelligence Dashboard',
  description: 'Strategic roadmap for fundraising success',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}