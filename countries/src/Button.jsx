import React from 'react'

class Button extends React.Component {
  
  render () {

return <Button className="btn btn-primary m-1" onClick={this.props.onClick}>  
{this.props.children}</Button>
}}
      
export default Button;

