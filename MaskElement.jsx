import React from 'react';


var MaskElement = React.createClass({
  render: function() {
  	var {x,y,isDisplayed}=this.props;
    var top = x*80+"px";
    var left =y*80+"px";
    var display = isDisplayed === true ? 'block' : 'none';
    var divStyle = {
    display: display,
    backgroundColor: 'rgba(73, 132, 223, 0.67)',
    width: '80px',
    height: '80px',
    position: 'absolute',
    zIndex: '3000',
    left: left,
    top: top
    };
   return (<div style={divStyle} ></div>);
  }
});



export default MaskElement;