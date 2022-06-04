import { rest } from "msw"
import { baseURL } from "../../api"

export const handlers = [
  rest.post(`${baseURL}/user/login/`, (req, res, ctx) => {
    return res(ctx.json({fullname: "Bruce"}), ctx.delay(150))
  })
]