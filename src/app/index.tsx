import "./index.scss"
import Header from "./parts/Header"
import Footer from "./parts/Footer"

function App() {
  return (
    <>
    	<Header />
    	<div className="root">
    		How is this font looks ? Вроде неплохо + кириллица есть
    	</div>
      <Footer />
    </>
  )
}

export default App
