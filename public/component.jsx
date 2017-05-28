var Header = React.createClass({
  getDefaultProps: function() {
    return {name: 'Anonymous'}
  },
  render: function() {
    return (
      <h1>Hello {this.props.name}!!</h1>
    )
  }
});

var Paragraph = React.createClass({
  getDefaultProps: function() {
    return {count: 1}
  },
  render: function() {
    return (
      <p>You are number #{this.props.count}</p>
    )
  }
});

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

ReactDOM.render(
  <Element/>, document.getElementById('welcome'))
