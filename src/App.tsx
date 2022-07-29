import React from 'react'
import { GlobalStyle } from './styles/PgLoginStyled';
import  Routes  from './Routes/index'
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
<>
    <BrowserRouter>
      <Routes/>
      <GlobalStyle/>
    </BrowserRouter>
</>
  )
}

export default App
