import React, { FC } from 'react'

interface MessageProps {
  msg: string
  type: 'danger' | 'success'
}

const Message: FC<MessageProps> = ({ msg, type }) => {
  let typeclass = ''

  if (type === 'danger') {
    typeclass = 'is-danger'
  }

  if (type === 'success') {
    typeclass = 'is-success'
  }

  return <article className={`message ${typeclass}`}>
    <div className="message-body">{msg}</div>
  </article>
}

export default Message