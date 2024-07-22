import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/about' element={<AboutUs />}/> 
          <Route path='/contact' element={<Contact />}/> 
        </Routes>
        
      </Router>
    </ThemeProvider>
  )
}

export default App
