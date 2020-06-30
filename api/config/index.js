// require('dotenv').config()
// import dotenv from 'dotenv'
import { config } from "https://deno.land/x/dotenv/mod.ts";


export const configg = {
  dbName: Deno.env.DB_NAME,
  dbPassword: Deno.env.DB_PASSWORD,
  dbUsername: Deno.env.DB_USERNAME,
  port: Deno.env.PORT,
}

