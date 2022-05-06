import React, { useEffect, useState } from 'react'

import db from '@/firebase'
import { userStore } from '@/stores'
import shortid from 'shortid'
import { useNavigate } from 'react-router-dom'

import Loading from '../../component/ui/Loading'

function Contact() {
    const duser = new db('users')
    const dchannel = new db('rooms')
    const [list, setList] = useState([])
    const [isLoad,setLoad] = useState(false)
    const user = userStore(state => state.info)
    const navigation = useNavigate()

    useEffect(async () => {
        const getUser = await duser.not({ id: user.id })
        const getContact = await dchannel.all()
        const listUser = getUser.filter(e1 => !getContact.some(e2 => e2.userId.includes(e1.id)));
        setList(listUser)
        setLoad(true)
    }, [])

    return (
        <div className='p-8 flex justify-center'>
            <ul className="border rounded w-full h-screen overflow-y-scroll pb-[180px]">
                <div className='p-2 bg-gray-600 font-bold text-white'>Chọn 1 liên lạc</div>
                {
                    isLoad
                    ? (
                        list.length == 0
                        ? <div className='p-2 font-bold'>Không tìm thấy liên lạc phù hợp</div>
                        : (
                            list.map((v,k) => (
                                <li key={k} className='hover:bg-gray-100 border-b p-2 flex items-center'
                                    onClick={() => {
                                        let roomId = shortid.generate()
                                        let saveAvatar = {}
                                        let saveName = {}
            
                                        saveAvatar['id_' + user.id] = user.avatar
                                        saveAvatar['id_' + v.id] = v.avatar
                                        saveName['id_' + user.id] = user.name
                                        saveName['id_' + v.id] = v.name
            
                                        dchannel.add({
                                            id: roomId,
                                            type: 0,
                                            userId: [user.id,v.id],
                                            avatar: saveAvatar,
                                            name: saveName
                                        })
            
                                        navigation('/r/' + roomId)
                                    }}
                                >
                                    <img src={v.avatar} className='w-8 h-8 rounded-full' />
                                    <span className='ml-2 font-bold'>{v.name}</span>
                                </li>
                            ))
                        )
                    )
                    : <Loading />
                }
            </ul>
        </div>
    )
}

export default Contact