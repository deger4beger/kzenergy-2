import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { setupStore } from "../../lib/redux"
import { interceptor } from "../../lib/api/index.interceptors"

const store = setupStore()
interceptor(store.dispatch)

interface IAppProviderProps {
	children: React.ReactNode
}

const AppProvider: React.FC<IAppProviderProps> = ({children}) => {

	return (
		<BrowserRouter>
			<Provider store={store}>
				{children}
			</Provider>
		</BrowserRouter>
	)
}

export default AppProvider