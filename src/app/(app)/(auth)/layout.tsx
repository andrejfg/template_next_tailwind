import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  if (!session || !session.user) {
    redirect('/sign-in')
  }

  return <SessionProvider session={session}>{children}</SessionProvider>
}
