'use client'

import { useSession } from 'next-auth/react'

export function HelloClient() {
  const session = useSession()
  return <div>Hello, {session?.data?.user?.name} !</div>
}
