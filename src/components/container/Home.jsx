import React from 'react'
import { useParams } from 'react-router-dom'

import ListRoom from '../component/Room/ListRoom'
import Window from '../component/Room/Window'


function Home() {
    const param = useParams()
    return (
        <div className='h-full'>
            {
                param.id == undefined
                    ? <div className="flex h-full">
                        <ListRoom />
                        <div className="mbm:hidden p-4 font-semibold">Chọn 1 Kênh Chat</div>
                    </div>
                    : <div className="flex h-full">
                        <div className="mbm:hidden"><ListRoom /></div>
                        <Window />
                    </div>
            }
        </div>
    )
}

export default Home