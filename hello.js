import React from "react";

export default React.createClass({
  render: function(){
    return(
      <div>
        Hidey ho, {this.props.name}!
      </div>
    );
  },
});
