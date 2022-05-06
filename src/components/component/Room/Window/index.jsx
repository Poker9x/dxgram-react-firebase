import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { userStore } from '@/stores'
import db from '@/firebase'
import Loading from '../../ui/Loading'
import Main from './Main'

const dchat = new db('chats')
const droom = new db('rooms')

function Window() {
    const param = useParams()
    const user = userStore(state => state.info)
    const [room, setRoom] = useState({})
    const [message,setMessage] = useState('')
    const [chat,setChat] = useState([])

    const refChat = useRef()
    const roomId = param.id


    useEffect(() => {
        droom.row({ id: roomId }).then(data => {
            
            let { id, documentId, time, name, avatar, userId, type } = data[0]

            if (type == 0) {
                userId = user.id == userId[0] ? userId[1] : userId[0]
                name = name['id_' + userId]
                avatar = avatar['id_' + userId]
            }

            setRoom({
                documentId,
                id,
                time,
                type,
                userId,
                name,
                avatar
            })

        })

        dchat.row({ id: roomId }).then(data => {
            setChat(data)
            if(refChat.current != undefined) refChat.current.scrollTo(0, refChat.current.scrollHeight)
        })

        dchat.onrow({ id: roomId},async data => {
            
            const getAllChat = await dchat.all()
            const last = getAllChat[getAllChat.length - 1]
            if(last.id == roomId){
                setChat(data)
                if(refChat.current != undefined) refChat.current.scrollTo(0, refChat.current.scrollHeight)
            }
        })

       
    }, [roomId])

    

    const sendChat = () => {
        if (message == '') {
          alert('Không được để trống')
        } else {
          dchat.add({
            id: roomId,
            userId: user.id,
            name: user.name,
            avatar: user.avatar,
            message: {
              type: 0,
              content: message
            }
          })
    
          setMessage('')
          refChat.current.scrollTo(0, refChat.current.scrollHeight)
        }
      }
    
      const handleKeyDown = e => {
        if (e.key === 'Enter') {
          sendChat()
        }
      }

    return (
        <div className='flex flex-col w-full h-screen'>
            {
                Object.entries(room).length === 0
                    ? <Loading />
                    : <>
                        <div className='flex items-center px-2 py-2 border'>
                            <Link to='/' className="mb:hidden hover:bg-gray-100 p-2 mr-2"><i className="fas fa-long-arrow-left"></i></Link>
                            {room.type == 0 ? <img src={room.avatar} className='w-10 h-10 rounded-full mr-2' /> : <div className='w-10 h-10 rounded-full bg-orange-500 font-bold text-xl flex items-center justify-center textWhite mr-2 text-white'>{room.avatar}</div>}
                            <div>
                                <div className='font-bold'>{room.name}</div>
                                <div className='text-[15px]'>{room.type == 0 ? <div className='flex items-center'><span className='text-[14px]'>Đang hoạt động</span><i className='w-2 h-2 rounded-full bg-green-500 ml-2' /></div> : <span className='text-[14px]'>{room.userId.length + ' thành viên'}</span>}</div>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-4 p-3 mbm:flex-1 mb:h-[80%] overflow-y-scroll' ref={refChat}>
                            {
                                chat.length == 0
                                ? <div className='p-4 font-bold'>Chưa có tin nhắn nào !!</div>
                                : <Main chat={chat} userId={user.id}/>
                            }
                        </div>
                        <div className='border-t  xsm:p-0 dtm:mb-14'>
                            <div className="bg-gray-200 flex items-center justify-between p-2">
                                <div className='flex w-full'>
                                    <button type="button" className="flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                        </svg>
                                    </button>
                                    <input onKeyDown={handleKeyDown} onChange={e => setMessage(e.target.value)} value={message} type="text" placeholder="Nhập nội dung ..." className="mx-2 w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200" />

                                </div>
                                <div className="flex items-center">
                                    <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                        </svg>
                                    </button>
                                    <button  type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </button>
                                    <button onClick={sendChat} type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out textWhite bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90 text-white">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Window