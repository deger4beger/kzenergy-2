import "./index.scss"
import { Suspense, useEffect } from "react"
import { initializeUser } from "../lib/redux/auth/slice"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import Header from "./parts/Header"
import Footer from "./parts/Footer"
import AppRouter from "./components/AppRouter"
import Preloader from "./components/Preloader"

function App() {

  const dispatch = useAppDispatch()
  const isInitialized = useAppSelector(state => state.userReducer.isInitialized)

  useEffect(() => {
    dispatch(initializeUser())
  }, [])

  if (!isInitialized) return <Preloader />

  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <div className="root">
        <AppRouter />
      </div>
      <Footer />
    </Suspense>
  )
}

export default App
