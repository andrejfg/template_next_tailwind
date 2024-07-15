import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  AUTH_FIREBASE_PROJECT_ID: z.string(),
  AUTH_FIREBASE_CLIENT_EMAIL: z.string(),
  AUTH_FIREBASE_PRIVATE_KEY: z.string(),
  AUTH_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
