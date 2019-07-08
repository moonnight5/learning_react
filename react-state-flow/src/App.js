import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';
import CommentList from './CommentList';
import CommentInput from './CommentInput'

let generateID =1;
class App extends Component{
  state = {
    lists:[
      {name:'tom',age:20,school:'ecut',id:0},
      {name:'top',age:21,school:'ICU',id:1},
    ],
    commentList:[]
  }
  handleAddInfo = ()=>{
    const lists = this.state.lists.slice(0);
    generateID++;
    lists.push({name:'ig',age:21,school:'champion',generateID})
    this.setState({
      lists
    })
  }
  handleDelete = (id)=>{
    console.log('父组件收到id',id);
    const lists = this.state.lists.slice(0)
    const index = lists.findIndex(list=>list.id === id);
    lists.splice(index,1);
    this.setState({
      lists
    })
  }
  handlePublish = (username,commentContent)=>{
    // push setState
    console.log()
    const commentList = this.state.commentList.slice(0);
    commentList.push({
      username,
      commentContent
    })
    this.setState({
      commentList
    })
  }
  render(){
    const {lists,commentList} = this.state
    return(
      <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {lists.map((list,i)=>{
          return (
            <List key={list.id} list={list} a={1} b={2} onDelete={this.handleDelete}/>
          )
        })}
      </ul>
      <div>
        <CommentInput onPublish = {this.handlePublish}/>
        <CommentList commentList = {commentList}/>  
      </div>
      </>
    )
  }
}

export default App;
