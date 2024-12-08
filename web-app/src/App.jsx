import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import BinsRoute from './pages/BinsRoute'
import History from './pages/History'
import Login from './pages/Login'
import BinsStatus from './pages/BinsStatus'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import LoadingBarProvider from './contexts/LoadingBarProvider'
import MyLoadingBar from './components/MyLoadingBar'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <LoadingBarProvider>
        <MyLoadingBar />
        <Router>  
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path='/status' element={<ProtectedRoute><BinsStatus /></ProtectedRoute>} />
              <Route path='/route' element={<ProtectedRoute><BinsRoute /></ProtectedRoute>} />
              <Route path='/history' element={<ProtectedRoute><History /></ProtectedRoute>} />
              <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition="Slide"
            />
          </Router>
      </LoadingBarProvider>
    </>
  )
}

export default App
