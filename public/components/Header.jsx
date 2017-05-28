import React from 'react';

var Header = React.createClass({
  getDefaultProps: function() {
    return {name: 'Anil'}
  },
  render: function() {
    return (
      <h1>Hello {this.props.name}!!</h1>
    )
  }
});

export default Header;
