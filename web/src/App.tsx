import { useEffect } from "react";
import { Header } from "./components/Header"

export const App = () => {

  if (document.documentElement.scrollTop >= 50) {
    console.log('entrou')
  }


  return (
    <div >
      <Header />
      <div style={{ height: 2000 }}></div>
    </div>
  )
}
