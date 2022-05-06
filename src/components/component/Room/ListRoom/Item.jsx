import React from 'react'
import { userStore } from '@/stores'

function Item({ room, chat }) {
    const user = userStore(state => state.info)

    const id = user.id == room.userId[0] ? room.userId[1] : room.userId[0]
    const name = room.name['id_' + id]
    const avatar = room.avatar['id_' + id]
    const time = new Date(room.time)
    const getChat = chat.filter(e => e.id == room.id)
    const lastChat = getChat[getChat.length - 1]
    let msg = 'Chưa có tin nhắn'
    if (getChat.length > 0) msg = lastChat.message.type == 0 ? lastChat.message.content : '[Hình Ảnh]'




    return (
        <div>
            {room.type == 0
                ? <div className="flex justify-between py-2 border-b p-2 hover:bg-gray-200">
                    <div className="flex">
                        <img className="w-12 h-12 rounded-full mr-2" src={avatar} alt={name} />
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-[14px] w-[200px] xsm:w-[280px] inline-block whitespace-nowrap overflow-hidden text-ellipsis">{msg}</div>
                        </div>
                    </div>
                    <div className="text-[13px] font-semibold ">{time.getMinutes() + ':' + time.getHours()}</div>
                </div>
                : <div className="flex justify-between py-2 border-b p-2 hover:bg-gray-200">
                    <div className="flex">
                        <div className="mr-2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-[25px] text-white bg-orange-500">{room.avatar}</div>
                        <div>
                            <div className="font-bold">{room.name}</div>
                            <div className="text-[14px] w-[190px] xsm:w-[270px] inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                                {getChat.length > 0 && <span className='text-green-600 font-bold text-[14px] mr-2'>{lastChat.name}</span>}<span>{msg}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-[13px] font-semibold ">{time.getHours() + ':' + time.getMinutes()}</div>
                </div>
            }
        </div>
    )
}

export default Item