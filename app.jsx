var React = require('react');
import CheckBox from './ChessBox.jsx'
import Soldier from './Soldier.jsx'
import Elephant from './Elephent.jsx'
import Camel from './Camel.jsx'
import Horse from './Horse.jsx'
import King from './King.jsx'
import Queen from './Queen.jsx'
import ElementAction from './ElementActionCreator.jsx'
import ChessStore from './ChessStore.jsx'
import ChessBoxAction from './ChessBoxActionCreator.jsx'
import MaskElement from './MaskElement.jsx'


var ChessBoard = React.createClass({
  render: function() {
   var checkBoxArray=[];
   var soldierArray=[];
   var divStyle={
    height:'640px',
    width:'640px',
    border:'1px solid black',
    position:'relative'
   }
   var color,x,y;
   var soldierFilter=this.state.ChessState.filter(function(element){
      return element.name=='soldier'
   })
   var optionListItems=soldierFilter.map(function(obj){
      return(<Soldier color={obj.color} x={obj.x} y={obj.y} identifier={obj.identifier} onElementClick={this.ElementClick}  {...this.state}/>)
    }.bind(this));

   var elephentFilter=this.state.ChessState.filter(function(element){
      return element.name=='elephant'
   })
   var elephantListItem=elephentFilter.map(function(obj){
      return(<Elephant color={obj.color} x={obj.x} y={obj.y} identifier={obj.identifier} onElementClick={this.ElementClick}  {...this.state}/>)
    }.bind(this)); 
   var camelListFilter=this.state.ChessState.filter(function(element){
      return element.name=='camel'
   })
   var camelListItem=camelListFilter.map(function(obj){
      return(<Camel color={obj.color} x={obj.x} y={obj.y} identifier={obj.identifier} onElementClick={this.ElementClick} {...this.state}/>)
    }.bind(this)); 
   var horseListFilter=this.state.ChessState.filter(function(element){
      return element.name=='horse'
   })
   var horseListItem=horseListFilter.map(function(obj){
      return(<Horse color={obj.color} x={obj.x} y={obj.y} identifier={obj.identifier} onElementClick={this.ElementClick}  {...this.state}/>)
    }.bind(this)); 
    var kingListFilter=this.state.ChessState.filter(function(element){
      return element.name=='king'
   })
   var kingListItem=kingListFilter.map(function(obj){
      return(<King color={obj.color} x={obj.x} y={obj.y} identifier={obj.identifier} onElementClick={this.ElementClick}  {...this.state}/>)
    }.bind(this)); 
   var queenListFilter=this.state.ChessState.filter(function(element){
      return element.name=='queen'
   })
   var queenListItem=queenListFilter.map(function(obj){
      return(<Queen color={obj.color} x={obj.x} y={obj.y} identifier={obj.identifier} onElementClick={this.ElementClick}  {...this.state}/>)
    }.bind(this)); 
   for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
         if (i % 2 == 0) {
                        if (j % 2 == 0) {
                            checkBoxArray.push(<CheckBox color='white' y={j} x={i} onChessBoxClick={this.chessBoxClick}/>)
                        }
                        else {
                            checkBoxArray.push(<CheckBox color='#0D9154' y={j} x={i} onChessBoxClick={this.chessBoxClick}></CheckBox>)
                        }
                    }

          else {
                        if (j % 2 == 0) {
                            checkBoxArray.push(<CheckBox color='#0D9154' y={j} x={i} onChessBoxClick={this.chessBoxClick}/>)
                        }
                        else {
                            checkBoxArray.push(<CheckBox color='white' y={j} x={i} onChessBoxClick={this.chessBoxClick}/>)
                        }
                    }          
      
    }
   }



  
   return (
    <div style={divStyle}><div>
    {checkBoxArray
    }</div>
    <div>
    <MaskElement x={this.state.MaskState.x} y={this.state.MaskState.y}  isDisplayed={this.state.MaskState.isDisplayed}></MaskElement>
    </div>
   {optionListItems}
   {elephantListItem}
   {camelListItem}
   {horseListItem}
   {kingListItem}
   {queenListItem}
    </div>
    )
    
  },

  getInitialState:function(){
    return {ChessState:ChessStore.getChessState(),MaskState:ChessStore.getMaskElementState()}
  },

  componentDidMount: function() {
    ChessStore.addChangeListener(this._onChange);
    
  },

  componentWillUnmount: function() {
    ChessStore.removeChangeListener(this._onChange);
  },
 
 ElementClick: function ( args ){
    ElementAction.updateElementAction( args );
  },
  chessBoxClick:function(args){
    ChessBoxAction.updateChessBoxCoordinates(args);
  },

  _onChange:function(){
    this.setState({ChessState:ChessStore.getChessState(),MaskState:ChessStore.getMaskElementState()})
  }


  
});

React.render(<ChessBoard/>, document.getElementById('example'));