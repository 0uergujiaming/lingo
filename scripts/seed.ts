import "dotenv/config"
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from '~/db/schema'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })


async function main() {
  try {
    console.log("Seed begin")

    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
    ]);

    console.log("Seed finished")

  } catch (error) {
    console.log(error)
    throw new Error("Seed failed")
  }
}

main()
