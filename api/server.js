
import { Application, Router, } from "https://deno.land/x/oak/mod.ts"
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { insertId } from './mongo/index.js'
const app = new Application()
const router = new Router()

router
  .post('/form', async ctx => {
    const { value } = await ctx.request.body()
    const data = await insertId(value)
    ctx.response.body = data
    ctx.response.status = 201
  })

app.addEventListener('error', (e) => {
  console.log(e.error)
})
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({
  port: 8888
})
