import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ListadoApp } from './ListadoApp'
import { UsersApp } from './components/UsersApp'
import { UserList } from './components/userList'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp/>
  </React.StrictMode>,
)
