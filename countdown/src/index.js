// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// class Hello extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       opacity: 1.0
//     }
//   }
//   componentDidMount () {
//     this.timer = setInterval(() => {
//       var opacity = this.state.opacity
//       opacity -= 0.05;
//       if(opacity < 0.1) {
//         opacity = 1.0
//       }
//       this.setState ({
//         opacity: opacity
//       })
//     }, 100);
//   }
//   render() {
//     return (
//       <div style={{opacity: this.state.opacity}}>
//         hello {this.props.name}
//       </div>
//     )
//   }
// }

// class UserGist extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       username: '',
//       lastGistUrl: '',
//     }
//   }
//   componentDidMount () {
//     const {source} = this.props;
//     fetch(source).then(data => data.json())
//     .then(data => {
//       console.log(data)
//       let lastGist = data[0];
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       })
//     })
//   }
//   render() {
//     const { username, lastGistUrl } = this.state 
//     return ( 
//       <div>
//         {username}'s last gist is <a href={lastGistUrl}>here</a>
//       </div>
//     );
//   }
// }

// class LikeButton extends React.Component {
//   state = {
//     text: 'like'
//   }
//   render() { 
//     const {text} = this.state
//     return (  
//       <p onClick={this.handleClick.bind(this)}>
//         You {text} this. Click to toggle.
//       </p>
//     );
//   }
//   handleClick () {
//     this.setState({
//       text: 'haven\'t'
//     })
//   }
// }
 
 

 

// ReactDOM.render(
// // {/* <Hello name="world" /> */}
// // <UserGist source="https://api.github.com/users/octocat/gists" />
// <LikeButton />
// , document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <Counter 
    value = {store.getState()}
    onIncrement = {() => store.dispatch({type: 'INCREMENT'})}
    onDecrement = {() => store.dispatch({type: 'DECREMENT'})}
  />
  , document.getElementById('root')
)
render();
store.subscribe(render)
