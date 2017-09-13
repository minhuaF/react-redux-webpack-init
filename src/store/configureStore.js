/**
 * Created at 16/11/28.
 * @Author Miwa.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// applyMiddleware来自redux可以包装 store 的 dispatch
// thunk 作用是使actions创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

 // 热替换选项
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
 