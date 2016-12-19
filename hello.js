import React from "react";

var Hello = React.createClass({
  render: function(){
    return(
      <div>
        Hidey ho, {this.props.name}!
      </div>
    );
  },
});

export default Hello;
