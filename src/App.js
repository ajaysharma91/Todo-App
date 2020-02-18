import React from 'react';
import './App.css';
import ListItems from './ListItems';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
        items:['ajay','vishal','viru','tenul'],
        currentItem:{
          text:'',
          key:''
        }
      }
      this.handleForm = this.handleForm.bind(this);
      this.handlerText = this.handlerText.bind(this);
  }
  
  handleForm = (e) =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    const items = [...this.state.items, newItem.text];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  

  handlerText = (e) =>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  deleteItem = (key)=>{
   const list = [...this.state.items];
   const del = list.splice(key);
   //const updateList = list.filter((key)=>key!==this.state.items);
   //this.setState({items:updateList};
  }
  render(){
    const listItems = this.state.items.map((item,index)=>{
      return <tr>
        <td>{index+1}</td>
        <td key={index+1}>{item}</td>
        </tr>
    });
    return (
      <div className="App">
        <header>
         <form id="form-to-do" onSubmit={this.handleForm}> 
           <input type="text" placeholder="Enter Text"value={this.state.currentItem.text} onChange={this.handlerText} />
           <button>Add Item</button>
         </form>
         <p>Hello:{this.state.items}</p>
         <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {listItems}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
  
}

export default App;
