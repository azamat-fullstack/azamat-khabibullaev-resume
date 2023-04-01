import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

function Root() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
