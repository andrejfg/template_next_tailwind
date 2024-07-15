import { auth, signOut } from '@/auth'
import { Button } from '@/src/components/button'
import { HelloClient } from '@/src/components/helloClient'

export default async function AuthPage() {
  const session = await auth()

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div>Hello, {session?.user?.name} !</div>
      <HelloClient />
      <form
        className="my-4"
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button type="submit" variant="secondary">
          SignOut
        </Button>
      </form>
    </div>
  )
}
