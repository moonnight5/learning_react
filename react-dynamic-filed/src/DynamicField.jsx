import React, { Component } from 'react';
 
let generateId = 0;
class DynamicField extends Component {
  state = {
    data: [
      { name: 'n1', age: 11, id: 0 }
    ]
  }
  handleValueChange = (key,value,id) => {
    // 不可变数据 浅拷贝
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id)
    data[index][key] = value
    this.setState({
      data
    })
  }
  handleDelete = (id) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id)
    data.splice(index,1)
    this.setState({
      data
    })
  }
  handleAdd = () => {
    let data = this.state.data.slice(0)
    generateId ++
    // push返回一个数组长度
    data.push({
      name: '', age: 0, id: generateId
    })
    this.setState({
      data
    })
  }
  render() { 
    const { data } = this.state;
    return (
      <>
      {
        data.map((fieldData, i) => {
          return (
            <Field key={fieldData.id} fieldData={fieldData} onFieldValueChang={this.handleValueChange} onFieldDelete={this.handleDelete} />
          )
        })
      }
      <br/>
      <button onClick={this.handleAdd}>添加</button>
      <br/>
      <button>提交</button>
      </>
    );
  }
}

class Field extends Component {
  state = {  }
  handleFieldChangeName = (e) => {
    const name = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const { onFieldValueChang } = this.props;
    onFieldValueChang('name',name,id)
  }
  handleFieldChangeAge = (e) => {
    // console.log(e)
    const age = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const { onFieldValueChang } = this.props;
    onFieldValueChang('age',age,id)
  }
  handleDelete = (e) => {
    const id = parseInt(e.target.dataset.id);
    const { onFieldDelete } = this.props;
    onFieldDelete(id)
  }
  render() { 
    const { fieldData } = this.props;
    const { name,age } = fieldData;
    return (  
      <div>
        姓名：<input type="text" value={name} onChange={this.handleFieldChangeName} data-id={fieldData.id} />
        年龄：<input type="number" value={age} onChange={this.handleFieldChangeAge} data-id={fieldData.id} />
        <button data-id={fieldData.id} onClick={this.handleDelete}>删除</button>
      </div>
    );
  }
}
 

export default DynamicField;
