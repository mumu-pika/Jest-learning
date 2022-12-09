import { rest } from 'msw'

const handlers = [
  rest.get('https://mysite.com/api/role', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userType: 'user',
      })
    )
  }),
]

export default handlers
