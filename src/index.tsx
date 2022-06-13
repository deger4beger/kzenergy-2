import { createRoot } from "react-dom/client"
import AppProvider from "./app/providers/AppProvider"
import App from "./app"

const container = document.getElementById("root")
const root = createRoot(container as Element)
root.render(
	<AppProvider>
		<App />
	</AppProvider>
)