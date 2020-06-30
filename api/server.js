
// const { Application } = require("https://deno.land/x/oak/mod.ts");
import { Application, Router, } from "https://deno.land/x/oak/mod.ts"
// const { config } = require('./config')
import { oakCors } from "https://deno.land/x/cors/mod.ts";
// import MongoLib from './mongo/index.js'
// import { config } from './config'
import { insertId } from './mongo/index.js'
const app = new Application()
const router = new Router()

// app.use(oakCors())
router
  .post('/form', async ctx => {
    const { value } = await ctx.request.body()
    console.log("[VALUE]", value)
    console.log('----------')
    const data = await insertId(value)
    ctx.response.body = data
    ctx.response.status = 201

    //   message: 'todo bien',
    //   data: value
    // }
  })

app.addEventListener('error', (e) => {
  console.log(e.error)
})
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({
  port: 8888
})