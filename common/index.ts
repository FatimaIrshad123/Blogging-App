import z from 'zod';

export const signupInput = z.object({
	email: z.string().email(),
    password: z.string(),
    name: z.string().optional()
})
export const signinInput = z.object({
	email: z.string().email(),
    password: z.string()
})
export const updateblogInput = z.object({
	title: z.string(),
    content: z.string(),
    id:z.string()
})
export const createblogInput = z.object({
	title: z.string(),
    content: z.string()
})

export type UpdateBlogInput = z.infer<typeof updateblogInput>
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createblogInput>
