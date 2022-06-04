import { rest } from "msw"

const baseUrl = "http://localhost:8000"

export const handlers = [
  rest.post(`${baseUrl}/user/login/`, (req, res, ctx) => {
    return res(ctx.json({fullname: "Bruce"}), ctx.delay(150))
  })
]