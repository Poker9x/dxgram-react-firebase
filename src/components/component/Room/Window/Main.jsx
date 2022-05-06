import React from 'react'
import ItemChat from './ItemChat'

function Main({ chat, userId }) {
 
  return (
    <>
      {chat.map((v,k) => (
          <ItemChat 
            key={k}
            type={userId == v.userId ? '0' : '1'}
            avatar={v.avatar}
            name={v.name}
            time={new Date(v.time).getHours() + ':' + new Date(v.time).getMinutes()}
            message={v.message}
          />
      ))}
    </>
  )
}

export default Main