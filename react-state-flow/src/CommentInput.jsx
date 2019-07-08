import React, { Component } from 'react';
class CommentInput extends Component {
  state = {  }
  handlePublish = ()=>{
     const username = this.refs.username.value 
     const commentContent = this.refs.commentContent.value
     console.log({username,commentContent})
     const {onPublish } = this.props;
     onPublish (username,commentContent)

  }
  render() { 
    return ( 
      <div>
        用户名:<input type="text" ref="username"/>
        评论内容:<textarea name="" id="" cols="" rows="10" ref="commentContent"></textarea>
        <button onClick={this.handlePublish}>发布</button>
      </div>
     );
  }
}
 
export default CommentInput;
