var React = require('react');
var Horse = React.createClass({
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
		<div  style={elementStyle} onClick={this.handleHorseClick}>
    {color=='white' ?
            <img src='Images/71.png'/> :
            <img src='Images/01.png'/>
          }
    
    </div>
		)
  },
   handleHorseClick:function(event){
    this.props.onElementClick({identifier:this.props.identifier,x:this.props.x,y:this.props.y});
  }
});

export default Horse;

