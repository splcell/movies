import { AppRouter } from "./components/AppRouter/Approuter"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"


function App() {

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <AppRouter />
        </div>
      </main>
      <Footer />
    </>
    
  )
}

export default App
