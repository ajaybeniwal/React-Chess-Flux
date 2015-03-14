var React = require('react');
var Soldier = React.createClass({
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
		<div onClick={this.handleSoldierClick} style={elementStyle}>
		{color=='white' ?
            <img src='Images/66.png'/> :
            <img src='Images/11.png'/>
          }
		
		</div>
		)
  },

  handleSoldierClick:function(event){
  this.props.onElementClick({identifier:this.props.identifier,x:this.props.x,y:this.props.y});
  }
});

export default Soldier;

