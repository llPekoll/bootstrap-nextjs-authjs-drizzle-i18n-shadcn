import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"
import config from "./config"

const pool = postgres(config.AUTH_DRIZZLE_URL, { max: 1 })

export const db = drizzle(pool, { schema })
