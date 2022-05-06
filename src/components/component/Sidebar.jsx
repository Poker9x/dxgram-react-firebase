import React from 'react'

import { userStore, sidebarStore } from '@/stores'
import { Link } from 'react-router-dom'


function Sidebar() {
    const user = userStore(state => state.info)
    const isSidebar = sidebarStore(state => state.is)
    const update = sidebarStore(state => state.update)

    const path = window.location.pathname
    const spPath = path.split('/')

    const isview = {
        home: path == '/' || spPath[1] == 'r' ? 'bg-gray-300 ' : '',
        contact: path == '/new/contact' ? 'bg-gray-300 ' : '',
        group: path == '/new/group' ? 'bg-gray-300 ' : ''
    }

    return (
        <div className={isSidebar + ' z-50 xl:block xl w-64 bg-gray-200 h-full xlm:fixed'}>
            <div onClick={() => update('hidden')} className="xl:hidden overflow-auto px-4 hover:bg-gray-200"><div className='float-right'><i className="far fa-times"></i></div></div>

            <div className="user-profile text-center">
                <div className="w-32 h-32 rounded-full m-auto mt-16">
                    <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full" />
                </div>
                <div className="text-gray-800 mt-8">
                    <span className="font-bold">{user.name}</span>
                    <span className="inline-block align-text-bottom">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </div>
            </div>

            <div className="menu mt-8 h-full overflow-y-scroll">

                <Link onClick={() => update('hidden')} to="" className={isview.home + "block py-4 px-12 border-l-4 text-black hover:bg-gray-300 hover:text-black"}>Tin Nhắn</Link>
                <Link onClick={() => update('hidden')} to="/new/contact" className={isview.contact + "block py-4 px-12 border-l-4 text-black hover:bg-gray-300 hover:text-black"}>Thêm Liên Lạc</Link>
                <Link onClick={() => update('hidden')} to="/new/group" className={isview.group + "block py-4 px-12 border-l-4 text-black hover:bg-gray-300 hover:text-black"}>Tạo Nhóm</Link>
                <Link onClick={() => update('hidden')} to="/info" className="block py-4 px-12 border-l-4 text-black hover:bg-gray-300 hover:text-black">Thông Tin</Link>
                <Link onClick={() => update('hidden')} to="/setting" className="block py-4 px-12 border-l-4 text-black hover:bg-gray-300 hover:text-black">Cài Đặt</Link>
            </div>
        </div>
    )
}

export default Sidebar