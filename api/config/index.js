// require('dotenv').config()
// import dotenv from 'dotenv'
import { config } from "https://deno.land/x/dotenv/mod.ts";

// export const configg = {
//   dbName: Deno.env.get('DB_NAME'),
//   dbPassword: Deno.env.get('DB_PASSWORD'),
//   dbUsername: Deno.env.get('DB_USERNAME'),
//   port: Deno.env.get('PORT'),
// }
export const configg = {
  dbName: config().DB_NAME,
  dbPassword: config().DB_PASSWORD,
  dbUsername: config().DB_USERNAME,
  port: config().DB_PORT
}
