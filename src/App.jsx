import './App.css'
import Banner from './conponents/banner/Banner'
import Clients from './conponents/clients/Clients'
import Feature from './conponents/feature/Feature'
import Financy from './conponents/financy/Financy'
import Footer from './conponents/footer/Footer'
import Linked from './conponents/linked/Linked'
import Manubar from './conponents/manu/Manubar'
import Payments from './conponents/payments/Payments'
import Portfolio from './conponents/portfolio/Portfolio'
import Why from './conponents/why/Why'

function App() {

  return (
    <>
    <Manubar/>
    <Banner/>
    <Payments/>
    <Feature/>
    <Financy/>
    <Clients/>
    <Linked/>
    <Why/>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default App
