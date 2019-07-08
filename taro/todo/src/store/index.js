import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'

export default function configStore () {
  // createStore 返回实例 单一状态树
  // vuex 四部分，
  // redux state概念 reducer(函数,负责返回状态) 概念 包含action 返回新的状态 没有mutations
  const store = createStore(rootReducer);
  return store;
}