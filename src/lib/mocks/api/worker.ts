import { rest, setupWorker } from "msw"
import { handlers } from "./handlers"

export const worker = setupWorker(...handlers);

(window as any).msw = { worker, rest }