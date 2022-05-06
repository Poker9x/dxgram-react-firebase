import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { userStore } from "@/stores"
import db from "@/firebase"

import Item from './Item'
import Loading from '../../ui/Loading'

const droom = new db('rooms')
const dchat = new db('chats')


function ListRoom() {
    const navigation = useNavigate()
    const user = userStore(state => state.info)

    const [list,setList] = useState([])
    const [chat,setChat] = useState([])
    const [isLoad,setisLoad] = useState(false)

    useEffect(() => {
        dchat.onall(data => {
            setChat(data)
        })
        droom.onall(async data => {
            let listRoom = []
            data.map((v) => {
                if(v.userId.includes(user.id)) listRoom.push(v)
            })
            setList(listRoom)
            setisLoad(true)
        })

        return () => {
            setList([])
            setChat([])
            setisLoad(false)
        }
    },[])

    const redirec = id => {
        navigation('/')
        setTimeout(() => navigation('/r/' + id),10)
    }

    return (
        <div className="h-full w-[300px] mbm:w-full border-r">
            <div className="flex border-b ">
                <input className="px-4 py-2 w-full" type="text" placeholder="Tìm Kiếm ..." />
                <button className="w-[100px] p-4 border-l hover:bg-gray-200"><i className="far fa-search"></i></button>
            </div>
           {
               isLoad
               ? (
                   list.length == 0
                   ? <div className='p-2 font-bold'>Chưa có liên lạc nào</div>
                   : (
                        <ul className='h-full overflow-y-scroll'>
                            {list.map((room,index) => (
                                <a key={index} onClick={() => redirec(room.id)}><Item room={room} chat={chat} /></a>
                            ))}
                        </ul>
                   )
               )
               : <Loading />
           }
        </div>

    )
}

export default ListRoom