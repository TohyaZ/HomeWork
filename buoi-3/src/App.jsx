import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar'
import Main from './Card';
function App() {


  return (
    <>
    <div id="header">
    <NavBar/>
    </div>
    <div id="main">
      <Main/>
    </div>
    </>
  )
}

export default App
