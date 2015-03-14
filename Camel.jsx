var React = require('react');
var Camel = React.createClass({
  render: function() {
    var { x, y, color } = this.props;
    var top = x * 80+'px';
    var left = y * 80+'px';
    var elementStyle = {
    height: '80px',
    width: '80px',
    position: 'absolute',
    top: top,
    left: left
   };
	return (
		<div style={elementStyle} onClick={this.handleCamelClick}>
    {color==='white' ?
            <img src='Images/72.png'/> :
            <img src='Images/02.png'/>
          }
  </div>
		);
  },
  handleCamelClick:function( event ){
    this.props.onElementClick({identifier:this.props.identifier,x:this.props.x,y:this.props.y});
  }
});

export default Camel;

