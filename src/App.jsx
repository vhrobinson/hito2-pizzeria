import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/components/LoginPage'
import Register from './pages/components/Register'
{/*import Home from './pages/Home'*/}
function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
     
          {/*<Home />*/}
        <Register/>
        <LoginPage/>
        <Footer />
      </div>
    </>
  )
}
export default App
