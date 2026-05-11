import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TicketRouter — Route Support Tickets to Product Automatically',
  description: 'AI-powered support ticket classifier that identifies feature requests and routes them to Linear or Jira automatically. Built for SaaS customer success and product teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e8d3e31a-8761-4aa1-b17a-f38037943fde"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
