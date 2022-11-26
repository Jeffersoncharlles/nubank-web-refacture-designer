
import { Background } from "./components/SVGS/Background"
import { Header } from "./components/Header"
import { Best } from "./pages/Best"
import { DigitalAccount } from "./pages/DigitalAccount"
import { Hero } from "./pages/Hero"
import { People } from "./pages/People"
import { Testimony } from "./pages/Testimony"
import { Card } from "./pages/Card"
import { PageDownload } from "./pages/PageDownload"
import { Footer } from "./components/Footer"
import { Invite } from "./pages/Invite"

export const App = () => {

  return (
    <>
      <Header />
      <Background />
      <Hero />
      <People />
      <Best />
      <DigitalAccount />
      <Card />
      <Testimony />
      <PageDownload />
      <Invite />
      <Footer />
    </>
  )
}
