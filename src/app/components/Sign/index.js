import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import SignIn from './SignIn'
import SignUp from './SignUp'
import { DOMAIN_NAME } from 'Config'

import './style.scss'

class Sign extends Component {
  static propTypes = {
    isSign: PropTypes.string,
    onType: PropTypes.func
  }

  onType = (e, isSign) => {
    e.stopPropagation()
    this.props.onType(isSign)
  }

  render() {
    const { isSign } = this.props
    const logo = `logo ${DOMAIN_NAME === 'dddm.tv' ? 'dddm' : DOMAIN_NAME === '5ddm.com' ? 'ddm' : ''}`
    return (
      <div styleName="user">
        <div styleName={logo} />
        <h1>{isSign === 'signIn' ? '登录' : '注册'}，可以发现更多</h1>
        {isSign === 'signIn' ? <SignIn /> : <SignUp />}
        <div styleName="user-reg" className="mt20">
          {isSign === 'signIn' ? (
            <span>
              还没有账号？<a onClick={e => this.onType(e, 'signUp')}>去注册</a>
            </span>
          ) : (
            <span>
              已有账号？<a onClick={e => this.onType(e, 'signIn')}>去登录</a>
            </span>
          )}
        </div>
      </div>
    )
  }
}

export default Sign
