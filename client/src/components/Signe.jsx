import React from 'react'
class Signe extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <form>
            <label>Enter the name</label><br></br>
            <input type="text"/><br></br>
            <label></label>Enter Password<br></br>
            <input type="text"/><br></br>
            </form>

        )
    }
}
export default Signe;