import React from 'react'

function ItemChat({ type, name, avatar, time, message }) {
    return <div className='my-2'>
        {
            type == '0'
                ? <div className='overflow-auto'>
                    <div className='bg-blue-600 float-right min-w-[50px] max-w-[60%] ttm:max-w-[90%] break-all p-2 rounded-l-lg rounded-tr-lg text-white'>
                        <div className='flex justify-end text-[12px] font-semibold'>{time}</div>
                        <div className='flex justify-end font-medium'>{FilterMessage(message)}</div>
                    </div>    
                </div>
                : <div>
                    <div className='float-left min-w-[50px] max-w-[60%] ttm:max-w-[90%] break-all flex items-end'>
                        <img className='w-8 h-8 rounded-full mr-2' src={avatar} alt={name} />
                        <div className='bg-gray-200 rounded-r-lg rounded-tl-lg p-2'>
                            <div className='flex justify-between items-center'>
                                <div className='font-bold text-green-600  mr-2'>{name}</div>
                                <div className='text-[12px] font-semibol'>{time}</div>
                            </div>
                            <div className='font-medium'>{FilterMessage(message)}</div>
                        </div>
                    </div>    
                </div>
        }
    </div>

}

const FilterMessage = message => {
    return <>
        {
            message.type == 0
                ? message.content
                : <img src={message.content} />
        }
    </>
}
export default ItemChat