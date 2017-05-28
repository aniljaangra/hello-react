import React from 'react';
import Form from './Form';
import Header from './Header';
import Paragraph from './Paragraph';

class Element extends React.Component{

  constructor(){
    super();
    this.state = {name: 'Anil'};
  }

  onNameUpdate(name){
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <Header name={this.state.name} />
        <Paragraph count={this.props.count}/>
        <Form updateName={this.onNameUpdate.bind(this)}/>
      </div>
    )
  }
}

module.exports = Element;
