import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Sidebar from '../component/Sidebar'
import Header from '../component/Header'
import Home from './Home'
import Contact from './new/Contact'
import Group from './new/Group'



function Router() {
    return (
        <BrowserRouter>
            <GroupRouter />
        </BrowserRouter>
    )
}

function GroupRouter() {
    let location = useLocation()
    const path = location.pathname.split('/')
    const [width, setWidth] = useState(window.innerWidth)
    
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
    })

    return (
        <>
            <Sidebar />
        
            <div className='h-full w-full'>
                {((path[1] != 'r') || (path[1] == 'r' && width > 900)) && <Header />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/r/:id" element={<Home />} />

                    <Route path='/new'>
                        <Route path="contact" element={<Contact />} />
                        <Route path="group" element={<Group />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Router