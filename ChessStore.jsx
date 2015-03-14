'use strict';

import ChessConstant from './ChessConstant.jsx'
import AppDispatcher from './Dispatcher.jsx'
import MaskElementStore from './MaskElementStore.jsx'
var {EventEmitter} = require('events');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _previousSelectedIdentifier=null;

var _initialState= [
	{name:'soldier',color:'white',x:1,y:0,identifier:'c9',direction:1,selected:false},
	{name:'soldier',color:'white',x:1,y:1,identifier:'c10',direction:1,selected:false},
	{name:'soldier',color:'white',x:1,y:2,identifier:'c11',direction:1,selected:false},
	{name:'soldier',color:'white',x:1,y:3,identifier:'c12',direction:1,selected:false},
	{name:'soldier',color:'white',x:1,y:4,identifier:'c13',direction:1,selected:false},
	{name:'soldier',color:'white',x:1,y:5,identifier:'c14',direction:1,selected:false},
	{name:'soldier',color:'white',x:1,y:6,identifier:'c15',direction:1,selected:false},
	{name:'soldier',color:'white',x:1,y:7,identifier:'c16',direction:1,selected:false},
	{name:'soldier',color:'black',x:6,y:0,identifier:'c17',direction:-1,selected:false},
	{name:'soldier',color:'black',x:6,y:1,identifier:'c18',direction:-1,selected:false},
	{name:'soldier',color:'black',x:6,y:2,identifier:'c19',direction:-1,selected:false},
	{name:'soldier',color:'black',x:6,y:3,identifier:'c20',direction:-1,selected:false},
	{name:'soldier',color:'black',x:6,y:4,identifier:'c21',direction:-1,selected:false},
	{name:'soldier',color:'black',x:6,y:5,identifier:'c22',direction:-1,selected:false},
	{name:'soldier',color:'black',x:6,y:6,identifier:'c23',direction:-1,selected:false},
	{name:'soldier',color:'black',x:6,y:7,identifier:'c24',direction:-1,selected:false},
	{name:'elephant',color:'white',x:0,y:0,identifier:'c1',direction:-1,selected:false},
	{name:'elephant',color:'white',x:0,y:7,identifier:'c8',direction:-1,selected:false},
	{name:'elephant',color:'black',x:7,y:0,identifier:'c25',direction:-1,selected:false},
	{name:'elephant',color:'black',x:7,y:7,identifier:'c32',direction:-1,selected:false},
	{name:'camel',color:'white',x:0,y:2,identifier:'c3',direction:-1,selected:false},
	{name:'camel',color:'white',x:0,y:5,identifier:'c6',direction:-1,selected:false},
	{name:'camel',color:'black',x:7,y:2,identifier:'c27',direction:-1,selected:false},
	{name:'camel',color:'black',x:7,y:5,identifier:'c30',direction:-1,selected:false},
	{name:'horse',color:'white',x:0,y:1,identifier:'c2',direction:-1,selected:false},
	{name:'horse',color:'white',x:0,y:6,identifier:'c7',direction:-1,selected:false},
	{name:'horse',color:'black',x:7,y:1,identifier:'c26',direction:-1,selected:false},
	{name:'horse',color:'black',x:7,y:6,identifier:'c31',direction:-1,selected:false},
	{name:'king',color:'white',x:0,y:4,identifier:'c4',direction:-1,selected:false},
	{name:'king',color:'black',x:7,y:4,identifier:'c28',direction:-1,selected:false},
	{name:'queen',color:'white',x:0,y:3,identifier:'c5',direction:-1,selected:false},
	{name:'queen',color:'black',x:7,y:3,identifier:'c29',direction:-1,selected:false}
];

function findElement(identifier){
	var selectedElement = _initialState.filter(function(element){
		return 	element.identifier === identifier;
	})[0];
	return selectedElement;
}


function selectElement(identifier){
	var selectedElement = _initialState.filter(function(element){
		return 	element.identifier === identifier;
	})[0];
	selectedElement.selected=true;
}

function findSelectedElement(){
	var selectedElement = _initialState.filter(function(element){
		return 	element.selected === true;
	}).length>0 ? _initialState.filter(function(element){
		return 	element.selected === true;
	})[0] : null;
	return selectedElement;
}

function isSelectionValid(identifier){
	var result = true;
	
	if(_previousSelectedIdentifier){
		var selectedElement=findElement(_previousSelectedIdentifier);
		var element = findElement( identifier );
		if(element.color===selectedElement.color){
			alert( 'Other element turn or unselect pervious selection' );
			result = false;
		}
	}
	return result;
}


var ChessStore = assign({}, EventEmitter.prototype, {

  getChessState:()=>{
  	return _initialState;
  },

  getMaskElementState:()=>{
  	return MaskElementStore.getMaskState();
  },
  emitChange: function() {
  this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});
// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
  	
 	case ChessConstant.ELEMENT_CLICK:
 	
 	AppDispatcher.waitFor([MaskElementStore.dispatchToken]);
 	var check=isSelectionValid(action.identifier);
 	if(!check){
 		return false;
 	}
 	
    selectElement( action.identifier );
    ChessStore.emitChange();
    break;
    case ChessConstant.CHESSBOX_MOVE:
      findSelectedElement().x = action.coordinates.x;
      findSelectedElement().y = action.coordinates.y;
      _previousSelectedIdentifier = findSelectedElement().identifier;
      findSelectedElement().selected=false;

      ChessStore.emitChange();
    break;


    default:
      // no op
  }
});



export default ChessStore;
