
import { Background } from "./components/Background"
import { Header } from "./components/Header"
import { Best } from "./pages/Best"
import { Hero } from "./pages/Hero"
import { People } from "./pages/People"
import { Testimony } from "./pages/Testimony"

export const App = () => {

  return (
    <div >
      <Header />
      <Background />
      <Hero />
      <People />
      <Best />
      <Testimony />
    </div>
  )
}
