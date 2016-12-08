import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router';

import { App, Home, SignIn } from './containers'

import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={Home} />
                <Route path="/sign/in" component={SignIn} />   
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)

// 需要过滤登录状态的时候，使用 onEnter 方法
// <Route onEnter={isAuthInit}>
//     <Route path="" component=""></Route>
// </Route>