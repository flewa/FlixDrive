import React from 'react'
import ReactDOM from 'react-dom'
import App from './jsx/pages/App'
import './css/index.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RedirectLink from './jsx/RedirectLink'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/dashboard' element={<App/>}/>
        <Route path='/login' element={<RedirectLink url="https://discord.com"/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
