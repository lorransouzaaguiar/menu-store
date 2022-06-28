import React from 'react'
import Menu from '../menu/components/Menu'
import './app.css'
import Header from '../shared/components/header'
import AppBar from '../shared/components/app-bar'

function App() {
    return (
        <div>
            <Header />
            <AppBar />
            <Menu />
        </div>
    )
}
export default App
