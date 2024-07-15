import { signIn } from '@/auth'
import { Button } from './button'

export function SignIn() {
  return (
    <form
      className="flex flex-col gap-8"
      action={async (formData) => {
        'use server'
        await signIn('credentials', formData)
      }}
    >
      <h1 className="text-center text-2xl">Login genérico</h1>
      <label>
        <p>Email</p>
        <input
          className="rounded-md border bg-transparent p-2"
          name="username"
          type="username"
        />
      </label>
      <label>
        <p>Password</p>
        <input
          className="rounded-md border bg-transparent p-2"
          name="password"
          type="password"
        />
      </label>
      <Button type="submit">SignIn</Button>
    </form>
  )
}
