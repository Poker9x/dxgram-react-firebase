import React from 'react'

import { userStore, sidebarStore } from '@/stores'

function Header() {
    const update = sidebarStore(state => state.update)

    return (
        <div className="main-body px-4 flex flex-col border-b">
            <div className="py-4 flex-2 flex flex-row">
                <div className="flex-1">
                    <span onClick={() => update('block')} className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                        <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </span>
                    </span>
                    <span className="inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                        <span className="font-bold">
                            Dxgram
                        </span>
                    </span>
                </div>
                <div className="flex-1 text-right">

                    <span className="inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                        <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header