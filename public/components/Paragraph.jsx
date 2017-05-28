import React from 'react';

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

export default Paragraph;
