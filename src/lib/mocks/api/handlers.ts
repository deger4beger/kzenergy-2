import { rest } from "msw"
import { baseURL } from "../../api"

export const url = (path) => {
  return new URL(path, baseURL).toString()
}

export const handlers = [
  rest.post(url("/user/login/"), (req, res, ctx) => {
    return res(ctx.json({fullname: "Bruce"}), ctx.delay(150))
  }),
  rest.post(url("/user/register/"), (req, res, ctx) => {
    return res(ctx.json({fullname: "Bruce"}), ctx.delay(150))
  })
]