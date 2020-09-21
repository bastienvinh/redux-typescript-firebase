import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Message from '../UI/Message'
import { setSuccess } from '../../store/actions/auth'
import { RootState } from '../../store'

const Dashboard : FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth)
  const dispacth = useDispatch()

  useEffect(() => {
    if (success) {
      dispacth(setSuccess(''))
    }
  }, [success, dispacth])

  return <section className="section">
    <div className="container">
      {needVerification && <Message type="success" msg="Please verify your email address." />}
      <h1 className="is-size-1">Welcome {user?.firstName}</h1>
    </div>
  </section>
}

export default Dashboard