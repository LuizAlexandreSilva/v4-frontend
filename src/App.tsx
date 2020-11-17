import React from 'react'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'

import GlobalStyle from './styles/global'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => (
  <>
    <Home />
    <GlobalStyle />
    <ToastContainer />
  </>
)

export default App
