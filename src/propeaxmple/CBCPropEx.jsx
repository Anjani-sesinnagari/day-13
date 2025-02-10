import React, { Component } from 'react'

 class CBCPropEx1 extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
            this.props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
        }

       { this.props.isMarried ? <h1>Married</h1> : <h1>Not Married</h1>}

       <button onClick={this.props.sendFun}>Click</button>   
      </div>
    )
  }
}
export default CBCPropEx1;



