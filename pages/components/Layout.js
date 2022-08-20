import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
const Layout = () => {
  return(
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}