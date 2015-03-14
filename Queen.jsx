var React = require('react');
var Queen = React.createClass({
  render: function() {
    var {x,y,color,identifier}=this.props;
    var top = x*80+"px";
    var left =y*80+"px";
    var elementStyle={
    height:'80px',
    width:'80px',
    position:'absolute',
    top:top,
    left:left
   }
	return (
		<div  style={elementStyle} onClick={this.handleQueenClick}>
    {color=='white' ?
            <img src='Images/73.png'/> :
            <img src='Images/04.png'/>
          }
    
    </div>
		)
  },
   handleQueenClick:function(event){
    this.props.onElementClick({identifier:this.props.identifier,x:this.props.x,y:this.props.y});
  }
});

export default Queen;

