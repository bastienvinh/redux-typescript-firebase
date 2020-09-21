import React, { FC } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Button from '../UI/Button'
import { RootState } from '../../store'
import { signout } from '../../store/actions/auth'
import { useDispatch, useSelector } from 'react-redux'

const Header: FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { authenticated: authentificated } = useSelector((state: RootState) => state.auth)

  const logoutClickHandler = () => {
    dispatch(signout())
  }

  return <nav className="navbar is-spaced has-shadow">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to={!authentificated ? "/" : "dashboard"}>AppName</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-items">
          {!authentificated ? <div className="buttons">
            <Button text="Sign up" onClick={() => history.push('/signup')} className="is-primary" />
            <Button text="Sign up" onClick={() => history.push('/signin')} />
          </div>
          :
          <Button text="Sign out" onClick={logoutClickHandler} />}
        </div>
      </div>
    </div>
  </nav>
}

export default Header