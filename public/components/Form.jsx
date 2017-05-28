import React from 'react';

class Form extends React.Component {


submitForm(e){
      e.preventDefault();
      const nameRef = this.refs.name;
      if(nameRef.value){
        this.props.updateName(nameRef.value);
        nameRef.value = '';
      }
}

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <input ref="name"/>
        <button> Submit </button>
      </form>
    )
  }
}

export default Form;
