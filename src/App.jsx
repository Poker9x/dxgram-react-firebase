import { useState, useEffect } from 'react'
import { userStore } from '@/stores'
import CryptoJS from 'crypto-js'

import Login from './components/container/Login'
import Router from './components/container/Router'
import PageLoad from './components/component/PageLoad'

function App() {
    const update = userStore(state => state.update)
    const [load,setLoad] = useState(false)
    const user = userStore(state => (state.info))
    
    useEffect(() => {
        if (localStorage.login) {
            const decode = CryptoJS.AES.decrypt(localStorage.login, 'duongx').toString(CryptoJS.enc.Utf8)
            update(JSON.parse(decode))
        }
        setTimeout(() => setLoad(true), 1000)
    }, [])


    return (
        <div className="app fixed w-screen h-screen flex">
            {load ? Object.entries(user).length === 0 ? <Login /> : <Router /> :  <PageLoad />}
        </div>
    )
}

export default App
