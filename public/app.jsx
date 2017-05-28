var Header = React.createClass({
  getDefaultProps: function() {
    return {name: 'Anonymous'}
  },
  render: function() {
    return (
      <h1>Hello {this.props.name}
        {this.props.greet}!!</h1>
    )
  }
});

var Paragraph = React.createClass({
  getDefaultProps: function() {
    return {count: 1}
  },
  render: function() {
    return (
      <p>You have Token Number #{this.props.count}</p>
    )
  }
});

class Element {

  static get defaultProps() {
    return {greet: 'Sir'}
  }

  render() {
    return (
      <div>
        <Header name={this.props.name} greet={this.props.greet}/>
        <Paragraph count={this.props.count}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Element name="Anil" count="2" greet="Dear"/>, document.getElementById('welcome'))
