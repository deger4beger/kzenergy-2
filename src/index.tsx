import { createRoot } from "react-dom/client"
import App from "./app"
import AppProvider from "./app/providers/AppProvider"

const container = document.getElementById("root")
const root = createRoot(container as Element)
root.render(
	<AppProvider>
		<App />
	</AppProvider>
)