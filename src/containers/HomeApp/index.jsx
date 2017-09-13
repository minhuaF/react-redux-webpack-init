/**
 * Created at 16/11/27.
 * @Author Miwa.
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// import * as HomeActions from '../../actions/home'


class HomeApp extends Component {
  render () {
    return (
        <div>
            <h2>HOME</h2>
            <p><Link to="/sign/in">SignIn</Link></p>
        </div>
    )}
}

//  将 state.home 绑定到props中的变量中 （state全局）
// const mapStateToProps = (state) =>({

// })


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(HomeActions, dispatch)
// }

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// export default connect(mapStateToProps, mapDispatchToProps)(HomeApp)



export default connect(state => ({

}))(HomeApp)