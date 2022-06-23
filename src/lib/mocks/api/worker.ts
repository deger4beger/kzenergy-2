import { rest, setupWorker } from "msw"
import { handlers } from "./handlers"
import { defaultHandlers } from "./defaultHandlers"

export const worker = setupWorker(...handlers, ...defaultHandlers);

(window as any).msw = { worker, rest }