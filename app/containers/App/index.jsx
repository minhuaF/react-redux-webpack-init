/**
 * Created at 16/11/27.
 * @Author Miwa.
 */

/**
 * To do 161115
 * react 组件模块化划分
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import './css/index.css'


/**
 * 无状态（stateless）组件，一个简单的容器，react-router会根据route规则匹配到的组件作为 ‘props.children’ 传入
 */

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
    </div>)
  }
}

export default connect(state => ({

}))(App)

