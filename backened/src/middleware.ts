import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';
import { jwt } from 'hono/jwt';
import { Jwt } from 'hono/utils/jwt';

const app = new Hono()

export async function authmiddleware(c:any, next:any){
    let token = c.req.header('Authorization')
  if (token) {
    try{
    let x = await Jwt.verify(token,'secret')
    c.set('userId',x.id)
    await next()
    }catch{
        return c.text('Invalid token')
    }
  } else {
    return c.text("You dont have acces");
  }
}