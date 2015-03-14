var React = require('react');

var ChessBox = React.createClass({
  render: function() {
  	
    var divStyle = {
    backgroundColor: this.props.color,
    width:'80px',
    height:'80px',
    float:'left'
    }; 
   return (<div style={divStyle} onClick={this.chessBoxClick} ></div>)
    
  },

  chessBoxClick:function(){
    this.props.onChessBoxClick({x:this.props.x,y:this.props.y});
  }
  
});



export default ChessBox;