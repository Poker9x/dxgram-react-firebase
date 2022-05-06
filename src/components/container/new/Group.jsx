import React, { useEffect, useState } from 'react'

import db from '@/firebase'
import { userStore } from '@/stores'
import shortid from 'shortid'
import { useNavigate } from 'react-router-dom'
import Loading from '../../component/ui/Loading'

function Group() {
    const duser = new db('users')
    const dchannel = new db('rooms')
    const [list, setList] = useState([])
    const user = userStore(state => state.info)
    const navigation = useNavigate()

    const [select, setSelect] = useState([])
    const [nameRoom, setNameRoom] = useState('')

    const handleCheckboxChange = (data) => {
        const isChecked = select.some(checkedCheckbox => checkedCheckbox === data)
        if (isChecked) {
            setSelect(
                select.filter(
                    (checkedCheckbox) => checkedCheckbox !== data
                )
            );
        } else {
            setSelect(select.concat(data));
        }
    }

    const create = () => {
        if(nameRoom == '' || nameRoom == ' '){
            alert('Tên phòng không được bỏ trống')
        } else {
            let roomId = shortid.generate()
            dchannel.add({
                id: roomId,
                type: 1,
                userId: [user.id,...select],
                avatar: nameRoom.slice(0,1).toLocaleUpperCase(),
                name: nameRoom
            })

            navigation('/r/' + roomId)
        }
    }

    useEffect(async () => {
        const getUser = await duser.not({ id: user.id })

        setList(getUser)
    }, [])

    return (
        <div className='p-8'>
            <div className='flex justify-between items-center mb-2'>
                <input className='w-full p-2 border outline-0' type="text" placeholder='Nhập tên phòng ...' onChange={e => setNameRoom(e.target.value.trim())} />
                <button onClick={create} className='bg-blue-800 text-white font-bold text-xl px-4 py-2'>Tạo</button>
            </div>
            <ul className="border rounded w-full h-screen overflow-y-scroll pb-[180px]">
                {
                    list.length == 0
                    ? <Loading />
                    : (
                        list.map((v, k) => (
                            <li key={k} className='hover:bg-gray-100 border-b p-2 flex items-center justify-between'
        
                            >
                                <div className='flex items-center justify-between'>
                                    <img src={v.avatar} className='w-8 h-8 rounded-full' />
                                    <span className='ml-2 font-bold'>{v.name}</span>
                                </div>
                                <input type='checkbox'
                                    checked={select.some(checkedCheckbox => checkedCheckbox === v.id)}
                                    onChange={() => handleCheckboxChange(v.id)}
                                />
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default Group