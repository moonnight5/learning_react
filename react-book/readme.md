- DOM之后MVVM兴起
  MVVM封装了DOM(VUE REACT) 让其更高效
- 组件开发 UI开发
  分为多个组件，拼装页面
  组件是一个类
  实例化一下，就可以用了
  复用
- 组件是一个粽子，里面有很多东西的
  template 模板是render()
  css
  js   isLiked
- React 和 VUE 都是MVVM的一种实现
  React用来做后台界面 VUE更利于做用户界面
  挂载点 界面跟组件的关系，界面由组件构成组件由HTML构成
  DOM被封装 封装成组件类
  constructor this.state 数据部分
  模板 render方法
  setData setState({})
- 模板里数据的细化
  es6字符串模板 每次编译
  setState this.render();
  状态和模板结合的地方在模板的编译，插入数据
  setState 驱动模板重新编译一下，数据驱动