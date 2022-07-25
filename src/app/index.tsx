import "./index.scss"
import { Suspense, useEffect } from "react"
import { initializeUser } from "../lib/redux/auth/slice"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import Header from "./parts/Header"
import Footer from "./parts/Footer"
import AppRouter from "./components/AppRouter"
import Preloader from "./components/Preloader"
import { permissionThunk } from "lib/redux/auth/thunks"

if (process.env.REACT_APP_ENVIRONMENT === "development") {
  const { worker } = require("../lib/mocks/api/worker")
  worker.start()
}

function App() {

  const dispatch = useAppDispatch()
  const isInitialized = useAppSelector(state => state.userReducer.isInitialized)
  const isAuth = useAppSelector(state => state.userReducer.isAuth)
  const permission = useAppSelector(state => state.userReducer.permission)

  useEffect(() => {
    dispatch(initializeUser())
  }, [])

  useEffect(() => {
    isAuth && dispatch(permissionThunk())
  }, [isAuth])

  if (!isInitialized || ( !permission && isAuth )) return <Preloader />

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
