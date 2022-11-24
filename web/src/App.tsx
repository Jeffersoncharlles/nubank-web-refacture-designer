
import { Background } from "./components/SVGS/Background"
import { Header } from "./components/Header"
import { Best } from "./pages/Best"
import { DigitalAccount } from "./pages/DigitalAccount"
import { Hero } from "./pages/Hero"
import { People } from "./pages/People"
import { Testimony } from "./pages/Testimony"

export const App = () => {

  return (
    <>
      <Header />
      <Background />
      <Hero />
      <People />
      <Best />
      <DigitalAccount />
      <Testimony />
    </>
  )
}
