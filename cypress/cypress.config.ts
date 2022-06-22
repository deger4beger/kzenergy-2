import { defineConfig } from "../node_modules/cypress/index.js"

export default defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // put node event listeners here
    },
    baseUrl: "http://localhost:3000"
  },
})