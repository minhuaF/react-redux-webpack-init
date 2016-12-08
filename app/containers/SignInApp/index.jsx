/**
 * Created at 16/11/27.
 * @Author Miwa.
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import './css/index.css'


class SignInApp extends Component {
  render () {
    return (
        <div>
            <h2>登录页面</h2>
            <p><img src={require('./images/2.jpg')}  /></p>
            <div className='test'></div>
        </div>
    )}
}

export default connect(state => ({

}))(SignInApp)

