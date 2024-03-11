import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { authmiddleware } from './middleware';
import { sign } from 'hono/jwt';
import { use } from 'hono/jsx';
import {createblogInput, signinInput, signupInput, updateblogInput} from '@fatimabibi/medium-common'
import { cors } from 'hono/cors';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	},
	Variables: {
        userId: string;
    }
}>();
app.use('/*',cors())
app.options('*', (c) => {
    return c.text('', 204)
})
app.post('/api/v1/signup', async(c) => {
  let body = await c.req.json()
  const {success} = signupInput.safeParse(body)
	if (!success){
		c.status(411)
		return c.json({
            message: "Invalid input"
        })
	}
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())
  // console.log(body.email)
  try{let user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    }
  })
  const jwt = await sign({id : user.id}, 'secret')
  return c.json(jwt)
}catch(e){
	c.status(403)
	return c.json({message: 'User already exist'})
}
})

app.post('/api/v1/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	const {success} = signinInput.safeParse(body)
	if (!success){
		c.status(411)
		return c.json({
            message: "Invalid input"
        })
	}
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});
	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}
	const jwt = await sign({ id: user.id }, 'secret');
	return c.json({ jwt });
})
app.get('/api/v1/user',authmiddleware,async(c) => {
	const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL    ,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const user = await prisma.user.findMany();
	return c.json(user);
})
app.get('/api/v1/blog/bulk',async(c) => {
	const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const allpost = await prisma.post.findMany({
		select: {
			id: true,
            title: true,
            content: true,
            authorId: true,
            author: {
				select: {
					name:true,
					email:true,
				}
			}
		}
	});
    return c.json({allpost});
})
app.get('/api/v1/blog/:id', authmiddleware, async(c) => {
	const id = c.req.param('id')
	console.log(id);
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	let post = await prisma.post.findMany({
		where: {
            id: id
        },
        select: {
            id: true,
            title: true,
            content: true,
            author: {
				select: {
                    id: true,
                    name: true,
                    email: true,
                }
			},
        }
	})
	return c.json(post)
})

app.post('/api/v1/blog', authmiddleware,async(c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	const authorId = c.get("userId");
	const {success} = createblogInput.safeParse(body)
	if (!success){
		return c.json({
            message: "Invalid input"
        })
	}
	let post = await prisma.post.create({
		data: {
			title: body.title,
            content: body.content,
            authorId: authorId
		},
		select: {
			id: true,
            title: true,
            content: true,
            authorId: true,
			author: {
				select: {
                    id: true,
                    name: true,
					email: true
                }
			}
		}
	})
	return c.json(post)
})

app.put('/api/v1/blog', authmiddleware,async(c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	const {success} = updateblogInput.safeParse(body)
	if (!success){
		return c.json({
            message: "Invalid input"
        })
	}
	await prisma.post.update({
		where: {
			id: body.id
		},
		data:{
			title: body.title,
            content: body.content
		}
	})
	return c.text('signin route')
})

export default app;
