import { setupWorker } from "msw"
import { setupServer } from "msw/node"
import { handlers } from "./handlers"
import { defaultHandlers } from "./defaultHandlers"

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers, ...defaultHandlers)
