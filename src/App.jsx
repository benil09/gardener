import Background from "./Components/background"
import Cards from "./Components/Cards"
import Container from "./Components/Container"

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-green-600/40 z-0">
        <Background />
        <div className="relative z-10 p-4 sm:p-6 md:p-8">
          <Container />
        </div>
      </div>
    </>
  )
}

export default App
