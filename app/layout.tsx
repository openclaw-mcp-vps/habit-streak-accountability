import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StreakStake — Habit Tracking with Real Financial Consequences',
  description: 'Build habits that stick. Set financial penalties for broken streaks — charges or charity donations — so you actually follow through.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b361a036-070e-4c33-a6bb-f54ec2364355"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
