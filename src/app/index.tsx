import "./index.scss"
import Header from "./parts/Header"
import Footer from "./parts/Footer"
import AppRouter from "./components/AppRouter"
import { useAppDispatch } from "./hooks/redux"
import { useEffect } from "react"
import { initializeUser } from "../lib/redux/auth/slice"

function App() {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initializeUser())
	}, [])

  return (
    <>
    	<Header />
    	<div className="root">
    		<AppRouter />
    	</div>
      <Footer />
    </>
  )
}

export default App
