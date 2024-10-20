import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import type { Metadata } from 'next'

import { Inter, Space_Grotesk} from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ],
  variable: '--font-inter',
})
const Space_Grotesk = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ],
  variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
  title: 'Dev-Overflow NextJs',
  description: 'A Next.js  Community driven app for asking and answering questions',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={``}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}