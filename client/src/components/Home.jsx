import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            array : []
        }
        this.componen = this.componen.bind(this)
    }
    componen() {
        $.ajax({
          url: `/getall`,
          type: "get",
          success: (res) => {
            this.setState({ array: res });
          },
        });
      }
      componentWillMount() {
        this.componen();
      }
    render(){
      var users = []
      for(var i = 0 ; i < this.state.array.length ; i++){
      users.push(<li key={i}>{this.state.array[i].name} </li>)
      // insert a for loop for user image
      }
        return <div>
        <ul>
          {/* {users} */}
          <li>User 1</li>
          <li><img src=""></li>
          <li>User 2</li>
          <li>Image 2</li>
          <li>User 3</li>
          <li>Image 3</li>
        </ul>
        </div>
    }
}
export default Home